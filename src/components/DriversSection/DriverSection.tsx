import './DriverSection.css';
import {RiderCard} from "./components/RiderCard/RiderCard";
import {Rider} from "../../types/all_types";
import {PageSection} from "../PageSection/PageSection";
import {useEffect, useState} from "react";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {firebaseDb} from "../../backend/firebase";

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

  // const [riders, setRiders] = useState<Array<Rider>>([]);

  // useEffect(() => {
  //   const q = query(collection(db, 'tasks'), orderBy('created', 'desc'))
  //   onSnapshot(q, (querySnapshot) => {
  //     const newRiders: Array<Rider> = querySnapshot.docs.map(doc => ({
  //       name: doc.data().name,
  //       lsuEmail: doc.id,
  //       requestPlacedTime: 1000,
  //       pickupLocation: doc.data().pickupLocation,
  //       dropoffLocation: doc.data().dropoffLocation,
  //       status: doc.data().status,
  //     }));
  //     console.log('newRiders', newRiders);
  //     setRiders(newRiders);
  //   })
  // },[])


  const riderCards = () => <ul className={'riders'}>
    {riders.map((rider) => <li key={rider.lsuEmail}><RiderCard rider={rider}/></li>)}
  </ul>

  return <PageSection className={'DriversSection'} sectionHeader={'Here are your rides'} children={riderCards()}/>
}