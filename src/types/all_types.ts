import internal from "stream";

export type Rider = {
  name: string;
  lsuEmail: string;
  requestPlacedTime: number;
  pickupLocation: string;
  dropoffLocation: string;
  status: "pending" | "enroute" | "pickedup" | "droppedoff";
};

export type RiderRequestedDetails = Rider;

// export type RiderRequestedDetails = {
//   name: string,
//   // riderRequestedCellNumber:number,
//   requestPlacedTime: number,
//   pickupLocation: string,
//   dropoffLocation: string,
//   status: 'pending' | 'enroute' | 'pickedup' | 'droppedoff',
//   cancelRide:{},
// }
