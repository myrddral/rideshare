// import useFetch from "../useFetch";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col } from "antd";
import { Table, Tag, Space } from "antd";

const RidesTable = () => {
  // const { data: events } = useFetch(
  //   "https://api.chucknorris.io/jokes/categories"
  // );

  // console.log(events);

  const columns = [
    {
      title: "Esemény",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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

  const data = [
    {
      key: "1",
      name: "CSCS Gathering 2021",
      date: "2021. Augusztus 12 - 15.",
      address: "Pécsbagota - Álmosvölgy",
      tags: ["fesztivál", "elektronikus zene"],
    },
    {
      key: "2",
      name: "DAAD Gathering",
      date: "2021. Augusztus 6 - 8.",
      address: "Dádpuszta",
      tags: ["fesztivál", "elektronikus zene", "világzene"],
    },
    {
      key: "3",
      name: "Lucid Dream Theathre 2021",
      date: "2021. Szeptember 3 - 5.",
      address: "Pusztaszínház",
      tags: ["fesztivál", "elektronikus zene"],
    },
  ];

  return (
    <>
      <Row>
        <Col span={24} >
          <Table
            columns={columns}
            dataSource={data}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default RidesTable;
