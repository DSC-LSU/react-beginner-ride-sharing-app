import "./DriverSection.css";
import { RiderCard } from "./components/RiderCard/RiderCard";
import { Rider } from "../../types/all_types";
import { PageSection } from "../PageSection/PageSection";
import React from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "../../backend/firebase";

export const DriverSection = () => {
  React.useEffect(() => {
    // Get riders from Firestore
  }, []);

  const riderCards = () => <ul className={"riders"}></ul>;

  return <div></div>;
};
