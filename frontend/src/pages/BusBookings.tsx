import React from 'react';
import BusList from '../components/BusList';

const BusBookings: React.FC = () => {


  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">My Bookings</h1>
       
      </div>
      <BusList />
    </div>
  );
};

export default BusBookings;
