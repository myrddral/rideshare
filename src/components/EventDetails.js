import React from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router";
import useFirestore from "../useFirestore";
import RidesTable from "./RidesTable";

const EventDetails = () => {
  const { id } = useParams();
  const event = useFirestore("events", `${id}`);
  const hasRides = event?.data?.rides?.length !== 0 ? true : false;

  return (
    <>
      {event.data !== null && (
        <React.Fragment>
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <h2>{event.data.name}</h2>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <h4>Felajánlott helyek</h4>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              {hasRides ? (
                <RidesTable eventID={id} />
              ) : (
                <p>Nincs még felajánlott szabad hely!</p>
              )}
            </Col>
          </Row>
        </React.Fragment>
      )}
    </>
  );
};

export default EventDetails;
