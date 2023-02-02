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
  const [riderRequestedDetails, setRiderRequestedDetails] =
    React.useState<RiderRequestedDetails | null>(null);

  React.useEffect(() => {
    if (props.user == null || props.user.email == null) return;

    const docQuery = doc(firebaseDb, "riders", props.user.email);
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

    return callback;
  }, []);

  if (props.user == null) {
    return <RiderNotSignedInSection />;
  }

  return riderRequestedDetails != null ? (
    <RiderRequestedSection riderRequested={riderRequestedDetails} />
  ) : (
    <RiderFillFormSection user={props.user} setUser={props.setUser} />
  );
};
