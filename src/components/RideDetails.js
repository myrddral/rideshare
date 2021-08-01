import React from "react";
import { useParams } from "react-router";
import useFirestore from "../useFirestore";
import { Spin } from "antd";

const RideDetails = () => {
  const { id } = useParams();
  const ride = useFirestore("rides", `${id}`);
  const loadingAnimation = (
    <div className="spinner">
      <Spin size="large" />
    </div>
  );
  console.log(ride);

  return (
    <>
      <div style={{display: "flex", flexDirection: "column"}}>
        {ride.data !== null ? (
          <React.Fragment>
            <h3> Sofőr: {ride.data.driverNickname}</h3>
            <h3>
              Jármű: {ride.data.carDetails.type} ({ride.data.carDetails.color})
            </h3>
            <h3> Indulási hely: {ride.data.startLocation}</h3>
            {ride.data.tags.map((element, i) => (
              <span key={i}>| {element} |</span>
            ))}
          </React.Fragment>
        ) : (
          loadingAnimation
        )}
      </div>
    </>
  );
};

export default RideDetails;
