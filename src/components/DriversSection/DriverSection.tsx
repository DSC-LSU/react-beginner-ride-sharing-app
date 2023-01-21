import './DriverSection.css';

export const DriverSection = () => {
  type Rider = {
    name: string,
    lsuEmail: string,
    requestPlacedTime: number,
    pickupLocation: string,
    dropoffLocation: string,
  }

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

  const _RiderCard = (props: { rider: Rider }) => {
    const {rider} = props;

    return <li className={'rider-card'}>
      <div className={'row-1'}>
        <p className={'name'}>{`${rider.name} (${rider.lsuEmail})`}</p>
        <p className={'rider-request-placed-time'}>{new Date(rider.requestPlacedTime).toLocaleTimeString()}</p>
      </div>
      <div className={'row-2'}>
        <p className={'pickup-location'}>{`From: ${rider.pickupLocation}`}</p>
        <p className={'dropoff-location'}>{`To: ${rider.dropoffLocation}`}</p>
      </div>

    </li>
  }

  return <div className={'DriverSection'}>
    <h2>Here are your rides</h2>
    <ul className={'riders'}>
      {riders.map((rider) => {
        return <_RiderCard rider={rider}/>
      })}
    </ul>
  </div>
}