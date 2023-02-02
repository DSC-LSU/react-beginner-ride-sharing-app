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

  return <div className={"input-container"}></div>;
};

type RiderFillFormSectionProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const RiderFillFormSection = (props: RiderFillFormSectionProps) => {
  const formId = useId();

  const requestRide = () => {};

  const requestRideForm = () => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
    };

    return <form className={"request-ride-form"} onSubmit={onSubmit}></form>;
  };

  // TODO 3: return <PageSection>
  // TODO 3.1: className={"RiderSection"}
  // TODO 3.2: sectionHeader={"Request a ride"}
  // TODO 3.3: sectionSubHeader={""}
  // TODO 3.4: children={requestRideForm()}

  return (
    <PageSection
      className={"RiderSection"}
      sectionHeader={"Request a ride"}
      sectionSubHeader={""}
      children={requestRideForm()}
    />
  );
};
