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
    // TODO 11: deleteDoc(doc(firebaseDb, "riders", riderRequested.email));
    deleteDoc(doc(firebaseDb, "riders", riderRequested.email));
  };

  const rideRequestedCard = (
    <div className={"rider-card"} data-status={riderRequested.status}>
      {/* TODO 8: <div className={"row-1"}> */}
      {/* TODO 8.1: <div className="left"> */}
      {/* TODO 8.1.1: <p className={"name"}>{`${riderRequested.name} (${riderRequested.email})`}</p> */}
      {/* TODO 8.1.2: <p className={"rider-request-placed-time"}>{new Date(riderRequested.requestPlacedTime).toLocaleTimeString()}</p> */}
      {/* TODO: 8.2: <div className"right"> */}
      {/* TODO: 8.2.1: <p className={"status"}>{`${riderRequested.status}`}</p> */}

      {/* TODO 9: <div className="row-2"> */}
      {/* TODO 9.1: <div className="left"> */}
      {/* TODO 9.1.1: <p className={"pickup-location"}>{`From: ${riderRequested.pickupLocation}`}</p> */}
      {/* TODO 9.1.2: <p className={"dropoff-location"}>{`To: ${riderRequested.dropoffLocation}`}</p> */}
      {/* TODO 9.2: <div className="right"> */}
      {/* TODO 9.2.1: <button onClick={deleteRideRequest}>Cancel Request</button> */}
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

  // TODO 10: return <PageSection ... />
  // TODO 10.1: className="RiderRequestedSection"
  // TODO 10.2: sectionHeader="Your ride is requested"
  // TODO 10.3: sectionSubHeader=""
  // TODO 10.4: children={<ul className={"riders"}><li>{rideRequestedCard}</li></ul>}
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
