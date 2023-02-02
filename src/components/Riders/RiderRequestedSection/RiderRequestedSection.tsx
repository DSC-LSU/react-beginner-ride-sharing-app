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

  const deleteRideRequest = () => {
    deleteDoc(doc(firebaseDb, "riders", riderRequested.email));
  };

  const rideRequestedCard = (
    <div className={"rider-card"} data-status={riderRequested.status}>
      <div className={"row-1"}>
        <div className={"left"}>
          <p
            className={"name"}
          >{`${riderRequested.name} (${riderRequested.email})`}</p>
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
          <p
            className={"pickup-location"}
          >{`From: ${riderRequested.pickupLocation}`}</p>
          <p
            className={"dropoff-location"}
          >{`To: ${riderRequested.dropoffLocation}`}</p>
        </div>
        <div className={"right"}>
          <button onClick={deleteRideRequest}>Cancel Request</button>
        </div>
      </div>
    </div>
  );

  return (
    <PageSection
      className="RiderRequestedSection"
      sectionHeader="Your ride is requested"
      sectionSubHeader=""
      children={
        <ul className={"riders"}>
          <li>{rideRequestedCard}</li>
        </ul>
      }
    />
  );
};
