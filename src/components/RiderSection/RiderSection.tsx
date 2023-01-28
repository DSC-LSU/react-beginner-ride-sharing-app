import { PageSection } from "../PageSection/PageSection";
import React, { useId } from "react";
import "./RiderSection.css";
import { doc, setDoc } from "firebase/firestore";
import { firebaseDb } from "../../backend/firebase";
import { Rider } from "../../types/all_types";

const LabeledInput = (props: {
  formId: string;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // onInput?: React.FormEventHandler<HTMLInputElement>;
}) => {
  const { formId, name, label, placeholder, value, autoComplete, onChange } =
    props;
  const inputId = `${formId}-${name}`;

  return (
    <div className={"input-container"}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        name={name}
        autoComplete={autoComplete}
        type={"text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const RiderSection = () => {
  const formId = useId();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [dropdoff, setDropdoff] = React.useState("");

  const requestRide = () => {
    // console.log("CLICKED", e.target.value);

    const newObject = {
      name,
      requestPlacedTime: new Date().getTime(),
      pickupLocation: pickup,
      dropoffLocation: dropdoff,
      status: "pending",
    };

    setDoc(doc(firebaseDb, "riders", email), newObject);

    // const ref = doc(firebaseDb, "riders", rider.lsuEmail);
    // updateDoc(ref, newObject);
  };

  const requestRideForm = () => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
    };

    return (
      <form className={"request-ride-form"} onSubmit={onSubmit}>
        <LabeledInput
          formId={formId}
          name={"name"}
          label={"Name"}
          autoComplete={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <LabeledInput
          formId={formId}
          name={"lsuEmail"}
          label={"LSU Email"}
          autoComplete={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          formId={formId}
          name={"from"}
          label={"Pickup Location"}
          autoComplete={"street-address"}
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <LabeledInput
          formId={formId}
          name={"to"}
          label={"Dropoff Location"}
          autoComplete={"street-address"}
          value={dropdoff}
          onChange={(e) => setDropdoff(e.target.value)}
        />
        <input type={"submit"} value={"Request Ride"} onClick={requestRide} />
      </form>
    );
  };

  return (
    <PageSection
      className={"RiderSection"}
      sectionHeader={"Request a ride"}
      children={requestRideForm()}
    />
  );
};
