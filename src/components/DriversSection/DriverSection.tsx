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

  // TODO 1: return <PageSection>
  // TODO 1.1: className={"DriversSection"}
  // TODO 1.2: sectionHeader={"Here are your rides"}
  // TODO 1.3: sectionSubHeader="Make sure you're signed in to edit your rider card status"
  // TODO 1.4: children={riderCards()}

  return <div></div>;
};
