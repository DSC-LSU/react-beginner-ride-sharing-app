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
  React.useEffect(() => {
    // Listen for riderRequestedDetails changes
  }, []);

  return <div></div>;
};
