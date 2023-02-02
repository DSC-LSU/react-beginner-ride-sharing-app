import "../../DriversSection/components/RiderCard/RiderCard.css";
import "./RiderRequestedSection.css";

import { RiderRequestedDetails } from "../../../types/all_types";
import { PageSection } from "../../PageSection/PageSection";
import { deleteDoc, doc } from "firebase/firestore";
import { firebaseDb } from "../../../backend/firebase";

export const RiderRequestedSection = (props: {
  riderRequested: RiderRequestedDetails;
}) => {
  const { riderRequested } = props;

  const deleteRideRequest = () => {};

  const rideRequestedCard = (
    <div className={"rider-card"} data-status={riderRequested.status}></div>
  );

  return <div></div>;
};
