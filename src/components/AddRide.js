// import { useAuth } from "../contexts/AuthContext";
import SelectDateAndTime from "./SelectDateAndTime";
import SelectStartLocation from "./SelectStartLocation";
import AddNumberOfSpaces from "./AddNumberOfSpaces";
import AddMoreDetails from "./AddMoreDetails";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Tabs,
} from "antd";

const AddRide = () => {
  //   const { currentUser } = useAuth();
  const [data, setData] = useState(null)
  const [activeTab, setActiveTab] = useState("1")
  const { TabPane } = Tabs;

  function callback(key) {
    setActiveTab(key)
  }

  useEffect(() => {
    console.log("Received data so far:");
    console.log(data)
  }, [data]);

  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Szabad hely felajánlása</h2>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Tabs centered defaultActiveKey="1" onChange={callback} activeKey={activeTab}>
            <TabPane tab="1. Mikor indulsz?" key="1">
              <SelectDateAndTime setData={setData} setActiveTab={setActiveTab}/>
            </TabPane>
            <TabPane tab="2. Honnan indulsz?" key="2">
            <SelectStartLocation setData={setData} setActiveTab={setActiveTab}/>
            </TabPane>
            <TabPane tab="3. Hány szabad helyed van?" key="3">
            <AddNumberOfSpaces setData={setData} setActiveTab={setActiveTab}/>
            </TabPane>
            <TabPane tab="4. Egyéb" key="4">
            <AddMoreDetails setData={setData}/>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default AddRide;
