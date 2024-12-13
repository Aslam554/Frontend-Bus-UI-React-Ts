import  { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserGraduate, FaBus, FaDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import tulogo from '../assets/tulogo.jpg'; // Import the image
import bus1 from '../assets/cmhbus.jpg';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`);
        // Sort bookings by departureTime in descending order
        const sortedBookings = response.data.sort(
          (a: Booking, b: Booking) => new Date(b.departureTime).getTime() - new Date(a.departureTime).getTime()
        );
        setBookings(sortedBookings);
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
    setIsLoading(true);
    const cardElement = document.getElementById(`booking-card-${bookingId}`);
    if (!cardElement) return;

    try {
      const canvas = await html2canvas(cardElement, { useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`booking-${bookingId}.pdf`);
    } catch (error) {
      console.error('Error generating PDF', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-4 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-8 text-center">Booking List</h1>
      {isLoading && <div className="text-center text-lg text-blue-600">Generating PDF...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.slice(0, visibleBookings).map((booking) => (
          <div
            key={booking._id}
            id={`booking-card-${booking._id}`}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative z-10 bg-indigo-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaUserGraduate className="text-2xl" />
                <h2 className="text-2xl font-bold">{booking.studentName}</h2>
              </div>
              <div className="flex items-center space-x-2">
                <FaBus className="text-2xl" />
                <p className="text-2xl font-bold">Seat: {booking.seatNumber}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: `url(${tulogo})` }}></div>
            <div className="relative z-10 p-6">
              {/* <p className="text-lg font-semibold mb-2">Mobile Number: <span className="text-gray-700">{booking.mobileNumber}</span></p> */}
              <p className="text-lg font-semibold mb-2">From: <span className="text-gray-700">{booking.from}</span></p>
              <p className="text-lg font-semibold mb-2">To: <span className="text-gray-700">{booking.to}</span></p>
              <p className="text-lg font-semibold mb-2">Departure Time: <span className="text-gray-700">{new Date(booking.departureTime).toLocaleString()}</span></p>
              <p className="text-lg font-semibold mb-2">Arrival Time: <span className="text-gray-700">{new Date(booking.arrivalTime).toLocaleString()}</span></p>
              <p className="text-lg font-semibold mb-2">Booking Services: <span className="text-gray-700">Hostel Bus</span></p>
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

      <div className="container  rounded-lg mx-auto w-[80%] h-[500px] mt-12 p-6 bg-gradient-to-r from-indigo-700 to-indigo-500 text-white shadow-lg text-center border-4 border-red  transition-transform transform hover:scale-[1.05] hover:shadow-2xl" style={{ backgroundImage: `url(${bus1})` }}>
        <h2 className="text-4xl font-bold mb-4 text-left">TUBus Services Rules</h2>
        <div className="space-y-4 text-left mx-auto">
          <p className="text-2xl font-semibold">1. Always carry your bus pass or ticket.</p>
          <p className="text-2xl font-semibold">2. Do not eat or drink on the bus.</p>
          <p className="text-2xl font-semibold">3. Respect other passengers and the driver.</p>
          <p className="text-2xl font-semibold">4. Do not disturb the driver while the bus is moving.</p>
          <p className="text-2xl font-semibold">5. Keep noise to a minimum.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
