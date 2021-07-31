import { Row, Col } from "antd";
import { Table, Tag } from "antd";
import { useEffect, useState } from "react";
import db from "../db";
import { Link } from "react-router-dom";

const RidesTable = (props) => {
  const { eventID } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.collection("rides")
      .where("eventID", "==", `${eventID}`)
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() });
        });
        setData(
          temp.map((ride, i) => ({
            key: i,
            name: `${ride.id}@@@${ride.driverNickname}`,
            contact: ride.driverContact,
            email: ride.driverEmail,
            passengers: ride.passengers,
            startLocation: ride.startLocation,
            carType: ride.carDetails.type,
            carColor: ride.carDetails.color,
            plateNumber: ride.carDetails.plateNumber,
            space: ride.maxSpace,
            tags: ride.tags.map((tag) => tag),
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [eventID]);

  console.log(data);

  const columns = [
    {
      title: "Sofőr",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Link to={"/rides/" + text.split("@@@")[0]}>
          {text.split("@@@")[1]}
        </Link>
      ),
    },
    {
      title: "Jármű",
      dataIndex: "carType",
      key: "carType",
    },
    {
      title: "Szabad helyek száma",
      dataIndex: "space",
      key: "address",
    },
    {
      title: "Címkék",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = "";
            if (tag === "ac") {
              color = "blue";
            }
            if (tag === "non-smoking") {
              color = "red";
            }
            if (tag === "highway") {
              color = "orange";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    // {
    //   title: "Műveletek",
    //   key: "action",
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Szerkesztés</a>
    //       <a>Törlés</a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            loading={isLoading}
            //pagination is not where it supposed to - check API
            pagination={{ position: "bottomCenter" }}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default RidesTable;
