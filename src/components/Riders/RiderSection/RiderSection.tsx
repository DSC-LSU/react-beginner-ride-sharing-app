import React from "react";
import { RiderFillFormSection } from "../RiderFillFormSection/RiderFillFormSection";
import { RiderRequestedSection } from "../RiderRequestedSection/RiderRequestedSection";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { firebaseDb } from "../../../backend/firebase";
import { Rider, RiderRequestedDetails } from "../../../types/all_types";
import { User } from "@firebase/auth";

type RiderSectionProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const RiderSection = (props: RiderSectionProps) => {
  const [riderRequestedDetails, setRiderRequestedDetails] =
    React.useState<RiderRequestedDetails | null>(null);

  React.useEffect(() => {
    if (props.user == null || props.user.email == null) return;

    // const q = query(
    // //   collection(firebaseDb, "riders", props.user.email),
    //   ,
    //   orderBy("requestPlacedTime", "desc")
    // );
    const docQuery = doc(firebaseDb, "riders", props.user.email);
    onSnapshot(docQuery, (data) => {
      const jsonData = data.data();
      console.log("jsonData", jsonData);

      if (jsonData != null) {
        const newRiderRequestedDetails: RiderRequestedDetails = {
          name: jsonData.name,
          lsuEmail: data.id,
          requestPlacedTime: jsonData.requestPlacedTime.seconds * 1000,
          pickupLocation: jsonData.pickupLocation,
          dropoffLocation: jsonData.dropoffLocation,
          status: jsonData.status,
        };
        setRiderRequestedDetails(newRiderRequestedDetails);
      } else {
        setRiderRequestedDetails(null);
      }

      //   const newRiders: Array<Rider> = querySnapshot.docs.map<Rider>((doc) => ({
      //     name: doc.data().name,
      //     lsuEmail: doc.id,
      //     requestPlacedTime: doc.data().requestPlacedTime.seconds * 1000,
      //     pickupLocation: doc.data().pickupLocation,
      //     dropoffLocation: doc.data().dropoffLocation,
      //     status: doc.data().status,
      //   }));
      //   console.log("newRiders", querySnapshot.docs[0].data(), newRiders);
      //   setRiders(newRiders);
      console.log("data", data.data());
    });
  }, []);

  return riderRequestedDetails ? (
    <RiderRequestedSection riderRequested={riderRequestedDetails} />
  ) : (
    <RiderFillFormSection user={props.user} setUser={props.setUser} />
  );
};
