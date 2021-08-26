// import { useAuth } from "../contexts/AuthContext";
import SelecDateAndTime from "./selectDateAndTime";
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
    console.log(`Az adat: ${JSON.stringify(data)}`)
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
              <SelecDateAndTime setData={setData} setActiveTab={setActiveTab}/>
            </TabPane>
            <TabPane tab="2. Honnan indulsz?" key="2">
            {/* <SelectStartLocation /> */}
            </TabPane>
            <TabPane tab="3. Hány szabad helyed van?" key="3">
            {/* <AddNumberOfSpaces /> */}
            </TabPane>
            <TabPane tab="4. Egyéb" key="4">
            {/* <AddMoreDetails /> */}
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default AddRide;
