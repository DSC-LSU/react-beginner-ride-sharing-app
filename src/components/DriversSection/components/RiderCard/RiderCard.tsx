import { Rider } from "../../../../types/all_types";
import "./RiderCard.css";
import { firebaseDb } from "../../../../backend/firebase";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";

export const RiderCard = (props: { rider: Rider }) => {
  const { rider } = props;

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {};

  return <div className={"rider-card"} data-status={rider.status}></div>;
};
