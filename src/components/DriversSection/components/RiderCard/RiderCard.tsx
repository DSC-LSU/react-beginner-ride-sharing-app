import { Rider } from "../../../../types/all_types";
import "./RiderCard.css";
import { firebaseDb } from "../../../../backend/firebase";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";

export const RiderCard = (props: { rider: Rider }) => {
  const { rider } = props;

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {};

  // TODO 2: <div className="rider-card">
  // TODO 2.1: <div className="row-1">
  // TODO 2.1.1: <div className="left">
  // TODO 2.1.1.1: <p className={"name"}>{`${rider.name} (${rider.email})`}</p>
  // TODO 2.1.1.2: <p className={"rider-request-placed-time"}>{new Date(rider.requestPlacedTime).toLocaleTimeString()}</p>
  // TODO 2.1.2: <div className="right">
  // TODO 2.1.2.1: <p className={"status"}>{`${rider.status}`}</p>
  // TODO 2.2: <div className="row-2">
  // TODO 2.2.1: <div className="left">
  // TODO 2.2.1.1: <p className={"pickup-location"}>{`From: ${rider.pickupLocation}`}</p>
  // TODO 2.2.1.2: <p className={"dropoff-location"}>{`To: ${rider.dropoffLocation}`}</p>
  // TODO 2.2.2: <div className="right">
  // TODO 2.2.2.1: <select className={"status-select"} value={rider.status} onChange={(e) => changeStatus(e)}>
  // TODO 2.2.2.1.1: <option value={"pending"}>Pending</option>
  // TODO 2.2.2.1.2: Do same for enroute, pickedup, and droppedoff

  return <div className={"rider-card"} data-status={rider.status}></div>;
};
