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
      status: 'pending',
    },
    {
      name: 'Jane Doe',
      lsuEmail: 'jdoe2@lsu.edu',
      requestPlacedTime: 1600000000,
      pickupLocation: 'Tiger Stadium',
      dropoffLocation: 'Parade Grounds',
      status: 'enroute',
    },
    {
      name: 'Sally Doe',
      lsuEmail: 'sdoe1@lsu.edu',
      requestPlacedTime: 1600000000,
      pickupLocation: 'Studion Union',
      dropoffLocation: 'UREC',
      status: 'pickedup',
    },
    {
      name: 'Michelle Anderson',
      lsuEmail: 'manderson1@lsu.edu',
      requestPlacedTime: 1600000000,
      pickupLocation: 'LSU Business Education Complex',
      dropoffLocation: 'Nicholson Hall',
      status: 'droppedoff',
    }
  ];

  return <div className={'DriverSection'}>
    <h1 className={'section-header'}>Here are your rides</h1>
    <ul className={'riders'}>
      {riders.map((rider) => {
        return <li><RiderCard rider={rider}/></li>
      })}
    </ul>
  </div>
}