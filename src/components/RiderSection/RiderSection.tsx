import {PageSection} from "../PageSection/PageSection";
import React, {useId} from "react";
import './RiderSection.css';

export const RiderSection = () => {
  const formId = useId();

  const requestRideForm = () => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
    };

    const LabeledInput = (props: {
      name: string, label: string, placeholder?: string, value?: string, autoComplete?: string,
    }) => {
      const {name, label, placeholder, value, autoComplete} = props;
      const inputId = `${formId}-${name}`;

      return <div className={'input-container'}>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} name={name} autoComplete={autoComplete} type={'text'} placeholder={placeholder} value={value}/>
      </div>
    }

    return <form className={'request-ride-form'} onSubmit={onSubmit}>
      <LabeledInput name={'name'} label={'Name'} autoComplete={'name'}/>
      <LabeledInput name={'lsuEmail'} label={'LSU Email'} autoComplete={'email'}/>
      <LabeledInput name={'from'} label={'Pickup Location'} autoComplete={'street-address'}/>
      <LabeledInput name={'to'} label={'Dropoff Location'} autoComplete={'street-address'}/>
      <input type={"submit"} value={'Request Ride'}/>
    </form>;
  };

  return <PageSection className={'RiderSection'} sectionHeader={'Request a ride'} children={requestRideForm()}/>
}