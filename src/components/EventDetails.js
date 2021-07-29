import { Row, Col } from "antd";
import { useState } from "react";
import { useParams } from "react-router";
import useFirestore from "../useFirestore";
import RidesTable from "./RidesTable";

const EventDetails = () => {
  const { id } = useParams();
  const event = useFirestore("events", `${id}`);
  const hasRides = event.data !== null && event.data.rides.length !== 0


  return (
    <>
      {event.data !== null && (
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <h2>{event.data.name}</h2>
          </Col>
        </Row>
      )}
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h4>Felajánlott helyek</h4>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          {hasRides ? <RidesTable rides={event.data.rides} /> : <p>Nincs még felajánlott szabad hely!</p>}
        </Col>
      </Row>
    </>
  );
};

export default EventDetails;
