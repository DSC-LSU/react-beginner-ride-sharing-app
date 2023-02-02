import { Rider } from "../../../../types/all_types";
import "./RiderCard.css";
import { firebaseDb } from "../../../../backend/firebase";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";

export const RiderCard = (props: { rider: Rider }) => {
  const { rider } = props;

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newObject = {
      status: e.target.value,
    };

    const ref = doc(firebaseDb, "riders", rider.lsuEmail);
    updateDoc(ref, newObject).catch((error) => {
      console.error("error updating rider status: ", error);
      alert("Are you trying to edit a rider that's not you?: " + error);
    });
  };

  return (
    <div className={"rider-card"} data-status={rider.status}>
      <div className={"row-1"}>
        <div className={"left"}>
          <p className={"name"}>{`${rider.name} (${rider.lsuEmail})`}</p>
          <p className={"rider-request-placed-time"}>
            {new Date(rider.requestPlacedTime).toLocaleTimeString()}
          </p>
        </div>
        <div className={"right"}>
          <p className={"status"}>{`${rider.status}`}</p>
        </div>
      </div>
      <div className={"row-2"}>
        <div className={"left"}>
          <p className={"pickup-location"}>{`From: ${rider.pickupLocation}`}</p>
          <p className={"dropoff-location"}>{`To: ${rider.dropoffLocation}`}</p>
        </div>
        <div className={"right"}>
          <select
            className={"status-select"}
            value={rider.status}
            onChange={(e) => changeStatus(e)}
          >
            <option value={"pending"}>Pending</option>
            <option value={"enroute"}>Enroute</option>
            <option value={"pickedup"}>Picked Up</option>
            <option value={"droppedoff"}>Dropped Off</option>
          </select>
        </div>
      </div>
    </div>
  );
};
