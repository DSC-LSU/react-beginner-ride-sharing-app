import "./DriverSection.css";
import { RiderCard } from "./components/RiderCard/RiderCard";
import { Rider } from "../../types/all_types";
import { PageSection } from "../PageSection/PageSection";
import React from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "../../backend/firebase";

export const DriverSection = () => {
  // TODO 1: Create a state variable riders and a setter setRiders

  React.useEffect(() => {
    // TODO 2: Create query()
    // TODO 2.1: collection(firebaseDb, "riders")
    // TODO 2.2: orderBy("requestPlacedTime", "desc")
    // TODO 3: Create onSnapshot()
    // TODO 3.1: Create newRiders from querySnapshot.docs.map()
    // TODO 3.2: setRiders(newRiders)
  }, []);

  const riderCards = () => <ul className={"riders"}></ul>;

  // TODO 4: console.log(riders)

  return (
    <PageSection
      className={"DriversSection"}
      sectionHeader={"Here are your rides"}
      sectionSubHeader="Make sure you're signed in to edit your rider card status"
      children={riderCards()}
    />
  );
};
