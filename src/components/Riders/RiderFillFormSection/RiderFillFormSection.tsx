import { PageSection } from "../../PageSection/PageSection";
import React, { useId } from "react";
import "./RiderFillFormSection.css";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { firebaseDb } from "../../../backend/firebase";
import { User } from "@firebase/auth";

const LabeledInput = (props: {
  formId: string;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  autoComplete?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const {
    formId,
    name,
    label,
    placeholder,
    value,
    autoComplete,
    onChange,
    disabled,
  } = props;
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
        disabled={disabled}
      />
    </div>
  );
};

type RiderFillFormSectionProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const RiderFillFormSection = (props: RiderFillFormSectionProps) => {
  const formId = useId();

  const [name, setName] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [dropdoff, setDropdoff] = React.useState("");

  const requestRide = () => {
    if (props.user == null || props.user.email == null) return;

    const newObject = {
      name,
      requestPlacedTime: Timestamp.fromDate(new Date()),
      pickupLocation: pickup,
      dropoffLocation: dropdoff,
      status: "pending",
    };

    setDoc(doc(firebaseDb, "riders", props.user?.email), newObject);
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
          name={"email"}
          label={"Email"}
          autoComplete={"email"}
          value={props.user?.email ?? ""}
          disabled={true}
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
      sectionSubHeader={""}
      children={requestRideForm()}
    />
  );
};
