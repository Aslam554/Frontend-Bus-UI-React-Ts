import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserGraduate, FaBus, FaDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import tulogo from '../assets/tulogo.jpg'; // Import the image
import bus1 from '../assets/bus1.jpg';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import bus4 from '../assets/bus4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Booking {
  _id: string;
  studentName: string;
  mobileNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  seatNumber: number;
}

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [visibleBookings, setVisibleBookings] = useState<number>(6);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings', error);
      }
    };

    fetchBookings();
  }, []);

  const handleViewMore = () => {
    setVisibleBookings((prevVisibleBookings) => prevVisibleBookings + 3);
  };

  const handleDownloadPDF = async (bookingId: string) => {
    const cardElement = document.getElementById(`booking-card-${bookingId}`);
    if (!cardElement) return;

    const canvas = await html2canvas(cardElement);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save(`booking-${bookingId}.pdf`);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Booking List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.slice(0, visibleBookings).map((booking) => (
          <div
            key={booking._id}
            id={`booking-card-${booking._id}`}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative z-10 bg-indigo-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaUserGraduate className="text-4xl" />
                <h2 className="text-4xl font-bold">{booking.studentName}</h2>
              </div>
              <div className="flex items-center space-x-2">
                <FaBus className="text-4xl" />
                <p className="text-4xl font-bold">Seat: {booking.seatNumber}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: `url(${tulogo})` }}></div>
            <div className="relative z-10 p-6">
              <p className="text-lg font-semibold mb-2">Mobile Number: <span className="text-gray-700">{booking.mobileNumber}</span></p>
              <p className="text-lg font-semibold mb-2">From: <span className="text-gray-700">{booking.from}</span></p>
              <p className="text-lg font-semibold mb-2">To: <span className="text-gray-700">{booking.to}</span></p>
              <p className="text-lg font-semibold mb-2">Departure Time: <span className="text-gray-700">{new Date(booking.departureTime).toLocaleString()}</span></p>
              <p className="text-lg font-semibold mb-2">Arrival Time: <span className="text-gray-700">{new Date(booking.arrivalTime).toLocaleString()}</span></p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => handleDownloadPDF(booking._id)}
                className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
                title="Download PDF"
              >
                <FaDownload className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleBookings < bookings.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View More
          </button>
        </div>
      )}
      <div className="mt-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Bus Rules</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-700 mb-6">
          <li>Always carry your bus pass or ticket.</li>
          <li>Do not eat or drink on the bus.</li>
          <li>Respect other passengers and the driver.</li>
          <li>Do not disturb the driver while the bus is moving.</li>
          <li>Keep noise to a minimum.</li>
        </ul>
        <Carousel showArrows={true} autoPlay interval={3000} infiniteLoop>
          <div>
            <img src={bus1} alt="Bus 1" className="rounded-md object-cover" />
            <p className="legend">Bus 1</p>
          </div>
          <div>
            <img src={bus2} alt="Bus 2" className="rounded-md object-cover" />
            <p className="legend">Bus 2</p>
          </div>
          <div>
            <img src={bus3} alt="Bus 3" className="rounded-md object-cover" />
            <p className="legend">Bus 3</p>
          </div>
          <div>
            <img src={bus4} alt="Bus 4" className="rounded-md object-cover" />
            <p className="legend">Bus 4</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BookingList;

















