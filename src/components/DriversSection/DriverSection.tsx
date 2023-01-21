import './DriverSection.css';
import {RiderCard} from "./components/RiderCard/RiderCard";
import {Rider} from "../../types/all_types";

export const DriverSection = () => {
  const riders: Array<Rider> = [
    {
      name: 'John Doe',
      lsuEmail: 'jdoe1@lsu.edu',
      requestPlacedTime: 1600000000,
      pickupLocation: 'PFT',
      dropoffLocation: 'Middleton Library',
    },
    {
      name: 'Jane Doe',
      lsuEmail: 'jdoe2@lsu.edu',
      requestPlacedTime: 1600000000,
      pickupLocation: 'Tiger Stadium',
      dropoffLocation: 'Parade Grounds',
    },
    {
      name: 'Steven Doe',
      lsuEmail: 'sdoe1@lsu.edu',
      requestPlacedTime: 1600000000,
      pickupLocation: 'Studion Union',
      dropoffLocation: 'UREC',
    }
  ];

  return <div className={'DriverSection'}>
    <h2>Here are your rides</h2>
    <ul className={'riders'}>
      {riders.map((rider) => {
        return <li><RiderCard rider={rider}/></li>
      })}
    </ul>
  </div>
}