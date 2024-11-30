import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Bus {
  _id: string;
  routeNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
}

const BusList: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/buses'); // Make sure this URL is correct
        if (Array.isArray(response.data)) {
          setBuses(response.data);
        } else {
          console.error('Data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching buses', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  if (loading) {
    return <p>Loading buses...</p>;
  }

  if (!Array.isArray(buses)) {
    return <p>Error: Unexpected data format.</p>;
  }

  if (!buses.length) {
    return <p>No buses available</p>;
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Bus List</h1>
      <ul className="space-y-4">
        {buses.map((bus) => (
          <li key={bus._id} className="bg-white shadow-md rounded-lg p-4">
            <p><strong>Route Number:</strong> {bus.routeNumber}</p>
            <p><strong>From:</strong> {bus.from}</p>
            <p><strong>To:</strong> {bus.to}</p>
            <p><strong>Departure Time:</strong> {new Date(bus.departureTime).toLocaleString()}</p>
            <p><strong>Arrival Time:</strong> {new Date(bus.arrivalTime).toLocaleString()}</p>
            <p><strong>Total Seats:</strong> {bus.totalSeats}</p>
            <p><strong>Available Seats:</strong> {bus.availableSeats}</p>
            <p><strong>Price:</strong> {bus.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusList;
