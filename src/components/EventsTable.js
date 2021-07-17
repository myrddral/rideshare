import { Row, Col } from "antd";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

const EventsTable = (props) => {
  const { events } = props;

  const data = events.data.map((event, i) => ({
    key: i,
    name: `${event.id}@@@${event.name}`,
    date: event.date,
    address: event.location,
    tags: event.tags.map((tag) => tag),
  }));

  const columns = [
    {
      title: "Esemény",
      dataIndex: "name",
      key: "name",
      render: (text) => <Link to={'/events/'+text.split('@@@')[0]}>{text.split('@@@')[1]}</Link>,
    },
    {
      title: "Dátum",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Helyszín",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Címkék",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
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
            //pagination is not where it supposed to - check API
            pagination = {{ position: "bottomCenter" }}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EventsTable;
