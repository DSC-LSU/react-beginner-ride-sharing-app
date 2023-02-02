import React from "react";
import { RiderFillFormSection } from "../RiderFillFormSection/RiderFillFormSection";
import { RiderRequestedSection } from "../RiderRequestedSection/RiderRequestedSection";
import { doc, onSnapshot } from "@firebase/firestore";
import { firebaseDb } from "../../../backend/firebase";
import { RiderRequestedDetails } from "../../../types/all_types";
import { User } from "@firebase/auth";
import { RiderNotSignedInSection } from "../RiderNotSignedInSection/RiderNotSignedInSection";

type RiderSectionProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const RiderSection = (props: RiderSectionProps) => {
  // TODO 1: Add riderRequestedDetails state of type RiderRequestedDetails | null
  const [riderRequestedDetails, setRiderRequestedDetails] =
    React.useState<RiderRequestedDetails | null>(null);

  React.useEffect(() => {
    // TODO 2: if (props.user == null || props.user.email == null) return;
    if (props.user == null || props.user.email == null) return;

    // TODO 3: const docQuery = doc(firebaseDb, "riders", props.user.email);
    const docQuery = doc(firebaseDb, "riders", props.user.email);
    // TODO 4: callback = onSnapshot(docQuery, (data) => { ... });
    // TODO 4.1: setRiderRequestedDetails() using data.data();
    const callback = onSnapshot(docQuery, (data) => {
      const jsonData = data.data();

      if (jsonData != null) {
        const newRiderRequestedDetails: RiderRequestedDetails = {
          name: jsonData.name,
          email: data.id,
          requestPlacedTime: jsonData.requestPlacedTime.seconds * 1000,
          pickupLocation: jsonData.pickupLocation,
          dropoffLocation: jsonData.dropoffLocation,
          status: jsonData.status,
        };
        setRiderRequestedDetails(newRiderRequestedDetails);
      } else {
        setRiderRequestedDetails(null);
      }
    });

    // TODO 5: return callback;
    return callback;
  }, []);

  // TODO 6: if (props.user == null) return <RiderNotSignedInSection />;
  if (props.user == null) {
    return <RiderNotSignedInSection />;
  }

  // TODO 7: return riderRequestedDetails != null ? ... : ...;
  // TODO 7.1: true: <RiderRequestedSection riderRequested={riderRequestedDetails} />
  // TODO 7.2: false: <RiderFillFormSection user={props.user} setUser={props.setUser} />
  return riderRequestedDetails != null ? (
    <RiderRequestedSection riderRequested={riderRequestedDetails} />
  ) : (
    <RiderFillFormSection user={props.user} setUser={props.setUser} />
  );
};
