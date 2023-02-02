import "./DriverSection.css";
import { RiderCard } from "./components/RiderCard/RiderCard";
import { Rider } from "../../types/all_types";
import { PageSection } from "../PageSection/PageSection";
import React from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "../../backend/firebase";

export const DriverSection = () => {
  const [riders, setRiders] = React.useState<Array<Rider>>([]);

  React.useEffect(() => {
    const q = query(
      collection(firebaseDb, "riders"),
      orderBy("requestPlacedTime", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      const newRiders: Array<Rider> = querySnapshot.docs.map<Rider>((doc) => ({
        name: doc.data().name,
        email: doc.id,
        requestPlacedTime: doc.data().requestPlacedTime.seconds * 1000,
        pickupLocation: doc.data().pickupLocation,
        dropoffLocation: doc.data().dropoffLocation,
        status: doc.data().status,
      }));
      setRiders(newRiders);
    });
  }, []);

  const riderCards = () => (
    <ul className={"riders"}>
      {/* TODO 1: riders.map */}
      {/* TODO 1.1: <li key={rider.email}> */}
      {/* TODO 1.2: <RiderCard rider={rider} /> */}
    </ul>
  );

  // TODO 3: Remove console.log

  return (
    <PageSection
      className={"DriversSection"}
      sectionHeader={"Here are your rides"}
      sectionSubHeader="Make sure you're signed in to edit your rider card status"
      children={riderCards()}
    />
  );
};
