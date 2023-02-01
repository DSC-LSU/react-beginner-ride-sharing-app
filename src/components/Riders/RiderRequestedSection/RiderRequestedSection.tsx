import React  from "react";
import "./DriverSection.css";

import { Rider, RiderRequestedDetails } from "../../../types/all_types";
import { PageSection } from "../../PageSection/PageSection";
import { useState } from "react";
import { useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "../../../backend/firebase";

export const RiderRequestedSection = (props: { riderRequested: RiderRequestedDetails }) => {
  const { riderRequested } = props;

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("CLICKED", e.target.value);

    const newObject = {
      status: e.target.value,
    };
  };

  return (
    <div className={"rider-card"} data-status={riderRequested.status}>
      <div className={"row-1"}>
        <div className={"left"}>
          <p className={"name"}>{`${riderRequested.name} (${riderRequested.riderRequestedCellNumber})`}</p>
          <p className={"rider-request-placed-time"}>
            {new Date(riderRequested.requestPlacedTime).toLocaleTimeString()}
          </p>
        </div>
        <div className={"right"}>
          <p className={"status"}>{`${riderRequested.status}`}</p>
        </div>
      </div>
      <div className={"row-2"}>
        <div className={"left"}>
          <p className={"pickup-location"}>{`From: ${riderRequested.pickupLocation}`}</p>
          <p className={"dropoff-location"}>{`To: ${riderRequested.dropoffLocation}`}</p>
        </div>
        <div className={"right"}>
          <select
            className={"status-select"}
            value={riderRequested.status}
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