export type Rider = {
  name: string;
  email: string;
  requestPlacedTime: number;
  pickupLocation: string;
  dropoffLocation: string;
  status: "pending" | "enroute" | "pickedup" | "droppedoff";
};

export type RiderRequestedDetails = Rider;
