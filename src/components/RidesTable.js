import { Row, Col } from "antd";
import { Table, Tag } from "antd";
import { useEffect, useState } from "react";
import db from "../db";

const RidesTable = (props) => {
  const { eventID } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("rides")
      .where("eventID", "==", `${eventID}`)
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        setData(
          temp.map((ride, i) => ({
            key: i,
            name: ride.driverNickname,
            car: ride.carDetails.type,
            space: ride.maxSpace,
            tags: ride.tags.map((tag) => tag),
          }))
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [eventID]);

  const columns = [
    {
      title: "Sofőr",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Jármű",
      dataIndex: "car",
      key: "car",
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
