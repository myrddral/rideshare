import { Row, Col } from "antd";
import { useParams } from "react-router";

const EventDetails = () => {
const { id } = useParams();

  return (
    <>
      <>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <h2>Esemény részletei</h2>
            <h2>{id}</h2>
          </Col>
        </Row>
      </>
    </>
  );
};

export default EventDetails;
