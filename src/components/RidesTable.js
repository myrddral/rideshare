import { Row, Col } from "antd";
import { Table, Tag } from "antd";
import { useEffect, useState } from "react";
import db from "../db";
import { Tooltip } from "antd";
import { useHistory } from "react-router-dom";

const RidesTable = (props) => {
  let history = useHistory();
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
            // startLocation: `${ride.start.city} - ${ride.start.location}`,
            start: `${ride.start.city}@@@${new Date(ride.startTime.seconds * 1000).toLocaleString("hu-HU")}`,
            carType: ride.carDetails.type,
            carColor: ride.carDetails.color,
            plateNumber: ride.carDetails.plateNumber,
            space: ride.maxSpace,
            price: `${ride.price} Ft`,
            tags: ride.tags.map((tag) => tag),
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [eventID]);

  const columns = [
    {
      title: "Indulás",
      dataIndex: "start",
      key: "start",
      render: (text) => <><p>{text.split("@@@")[0]}</p>
      <p>{text.split("@@@")[1]}</p></>
    },
    {
      title: "Sofőr",
      dataIndex: "name",
      key: "name",
      responsive: ['sm'],
      render: (text) => text.split("@@@")[1]
    },
    {
      title: "Jármű",
      dataIndex: "carType",
      key: "carType",
      responsive: ['sm'],
    },
    {
      title: "Helyek",
      dataIndex: "space",
      key: "address",
    },
    {
      title: "Hozzájárulás",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Címkék",
      key: "tags",
      dataIndex: "tags",
      responsive: ['md'],
      render: (tags) => (
        <>
          {tags.map((tag) => {
            const tagProperties = {
              iconType: "",
              color: "",
              tooltip: "",
            };
            if (tag === "ac") {
              tagProperties.iconType = "ac_unit";
              tagProperties.color = "blue";
              tagProperties.tooltip = "Van légkondi";
            }
            if (tag === "non-smoking") {
              tagProperties.iconType = "smoke_free";
              tagProperties.color = "orange";
              tagProperties.tooltip = "Nemdohányzó";
            }
            if (tag === "highway") {
              tagProperties.iconType = "add_road";
              tagProperties.color = "cyan";
              tagProperties.tooltip = "Autópályán megy";
            }
            return (
              <Tooltip
                key={tag}
                color={tagProperties.color}
                title={tagProperties.tooltip}
              >
                <Tag color={tagProperties.color}>
                  <span
                    style={{
                      padding: "5px 5px",
                    }}
                    className="material-icons md-36"
                  >
                    {tagProperties.iconType}
                  </span>
                </Tag>
              </Tooltip>
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
            rowClassName="pointerCursor"
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history.push(`/rides/${record.name.split("@@@")[0]}`);
                }, // click row
                // onDoubleClick: (event) => {}, // double click row
                // onContextMenu: (event) => {}, // right button click row
                // onMouseEnter: (event) => {}, // mouse enter row
                // onMouseLeave: (event) => {}, // mouse leave row
              };
            }}
            columns={columns}
            dataSource={data}
            loading={isLoading}
            pagination={{ position: ["none", "bottomCenter"] }}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default RidesTable;
