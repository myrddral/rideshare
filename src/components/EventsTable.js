import { Row, Col } from "antd";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

const EventsTable = (props) => {
  const { events } = props;

  const data = events.data.map((event, i) => ({
    key: i,
    name: `${event.id}@@@${event.name}@@@${event.date}`,
    address: event.location,
    tags: event.tags.map((tag) => tag),
  }));

  const columns = [
    {align: "center"},
    {
      title: "Események",
      dataIndex: "name",
      key: "name",
      render: (text) => <><Link style={{fontSize: 16}} to={'/events/'+text.split('@@@')[0]}>{text.split('@@@')[1]}</Link>
      <p>{text.split('@@@')[2]}</p></>,
    },
    {
      title: "Helyszín",
      dataIndex: "address",
      key: "address",
      responsive: ['sm'],
    },
    {
      title: "Címkék",
      key: "tags",
      dataIndex: "tags",
      responsive: ['sm'],
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = "geekblue";
            if (tag === "elektronikus zene") {
            }
            if (tag === "fesztivál") {
              color = "green";
            }
            if (tag === "világzene") {
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
            pagination={{ position: ["none", "bottomCenter"] }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EventsTable;
