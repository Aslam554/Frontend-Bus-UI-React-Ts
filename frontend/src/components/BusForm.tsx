import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaPhone, FaMapMarkerAlt, FaClock, FaBook, FaHome } from 'react-icons/fa';
import busImage from '../assets/bus.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface BusFormInput {
  studentName: string;
  mobileNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
}

const BookingForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BusFormInput> = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/bookings', data);
      toast.success('Bus booking added successfully!');
      //await new Promise(setTimeout(navigate('/'),5000))
      await new Promise(resolve => setTimeout(resolve, 5000)).then(() => navigate('/'));

      // Reset form fields
      reset({
        studentName: '',
        mobileNumber: '',
        from: '',
        to: '',
        departureTime: '',
        arrivalTime: '',
      });
    } catch (error) {
      toast.error('Failed to add bus booking.');
      console.error('Error:', error);
    }
  };

  const handleBackToHome = async() => {
    const navigate = useNavigate();
    navigate('/');
  };

  return (
    
    <div className="max-w-md mx-auto m-[20px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${busImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-4 left-4">
        
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <FaBook className="text-white text-4xl mr-2" />
          <h2 className="text-4xl font-bold text-white">Book Your Bus</h2>
        </div>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
            <div className="relative mt-1">
              <input
                id="studentName"
                placeholder='john doe'
                {...register('studentName', { required: 'Student Name is required' })}
                className={`block w-full pl-10 pr-3 py-2 border ${errors.studentName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.studentName && <p className="mt-2 text-sm text-red-500">{errors.studentName.message}</p>}
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <div className="relative mt-1">
              <input
                id="mobileNumber"
                placeholder='9988776655'
                type="tel"
                {...register('mobileNumber', { required: 'Mobile Number is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid mobile number' } })}
                className={`block w-full pl-10 pr-3 py-2 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.mobileNumber && <p className="mt-2 text-sm text-red-500">{errors.mobileNumber.message}</p>}
          </div>
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
            <div className="relative mt-1">
              <input
                id="from"
                placeholder='Tezpur University'
                {...register('from', { required: 'From location is required' })}
                className={`block w-full pl-10 pr-3 py-2 border ${errors.from ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.from && <p className="mt-2 text-sm text-red-500">{errors.from.message}</p>}
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <div className="relative mt-1">
              <input
                id="to"
                placeholder='Tezpur Town'
                {...register('to', { required: 'To location is required' })}
                className={`block w-full pl-10 pr-3 py-2 border ${errors.to ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.to && <p className="mt-2 text-sm text-red-500">{errors.to.message}</p>}
          </div>
          <div>
            <label htmlFor="departureDateTime" className="block text-sm font-medium text-gray-700">Departure Date & Time</label>
            <div className="relative mt-1">
              <input
                id="departureDateTime"
                type="datetime-local"
                {...register('departureTime', { required: 'Departure Date & Time is required' })}
                className={`block w-full pl-10 pr-3 py-2 border ${errors.departureTime ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.departureTime && <p className="mt-2 text-sm text-red-500">{errors.departureTime.message}</p>}
          </div>
          <div>
            <label htmlFor="arrivalDateTime" className="block text-sm font-medium text-gray-700">Arrival Date & Time</label>
            <div className="relative mt-1">
              <input
                id="arrivalDateTime"
                type="datetime-local"
                {...register('arrivalTime', { required: 'Arrival Date & Time is required' })}
                className={`block w-full pl-10 pr-3 py-2 border ${errors.arrivalTime ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.arrivalTime && <p className="mt-2 text-sm text-red-500">{errors.arrivalTime.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-yellow-400 hover:text-black transition duration-600"
            >
              Book Bus
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
    
  );
};

export default BookingForm;
