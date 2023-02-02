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

  React.useEffect(() => {
    // TODO 2: if (props.user == null || props.user.email == null) return;
    // TODO 3: const docQuery = doc(firebaseDb, "riders", props.user.email);
    // TODO 4: callback = onSnapshot(docQuery, (data) => { ... });
    // TODO 4.1: setRiderRequestedDetails() using data.data();
    // TODO 5: return callback;
  }, []);

  // TODO 6: if (props.user == null) return <RiderNotSignedInSection />;

  // TODO 7: return riderRequestedDetails != null ? ... : ...;
  // TODO 7.1: true: <RiderRequestedSection riderRequested={riderRequestedDetails} />
  // TODO 7.2: false: <RiderFillFormSection user={props.user} setUser={props.setUser} />
  return (
    <div>
      <RiderFillFormSection user={props.user} setUser={props.setUser} />
    </div>
  );
};
