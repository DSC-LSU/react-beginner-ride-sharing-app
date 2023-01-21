export type Rider = {
  name: string,
  lsuEmail: string,
  requestPlacedTime: number,
  pickupLocation: string,
  dropoffLocation: string,
  status: 'pending' | 'enroute' | 'pickedup' | 'droppedoff',
}