export interface User {
  id: string;
  name: string;
  email: string;
  hostelId: string;
}

export interface Bus {
  id: string;
  routeNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  availableSeats: number;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  busId: string;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}