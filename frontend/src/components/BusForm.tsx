import React, { useState } from 'react';
import axios from 'axios';

const BusForm: React.FC = () => {
  const [formData, setFormData] = useState({
    routeNumber: '',
    from: '',
    to: '',
    departureTime: '',
    arrivalTime: '',
    totalSeats: 0,
    availableSeats: 0,
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/buses', formData);
      alert('Bus added successfully');
    } catch (error) {
      console.error('Error adding bus', error);
      alert('Error adding bus');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Add Bus</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-indigo-600 font-medium mb-2">Route Number</label>
            <input
              type="text"
              name="routeNumber"
              value={formData.routeNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">Departure Time</label>
            <input
              type="datetime-local"
              name="departureTime"
              value={formData.departureTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">Arrival Time</label>
            <input
              type="datetime-local"
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">Total Seats</label>
            <input
              type="number"
              name="totalSeats"
              value={formData.totalSeats}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">Available Seats</label>
            <input
              type="number"
              name="availableSeats"
              value={formData.availableSeats}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-600 font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusForm;
