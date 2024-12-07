import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bus, UserCircle2 } from 'lucide-react';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBookingsClick = () => {
    navigate('/bookings');
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bus className="h-8 w-8" />
            <span className="font-bold text-xl">HostelBus</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <a
              href="/Bus_Timing_14_2_2024.pdf"
              download="Bus_Timing_14_2_2024.pdf"
              className="hover:bg-yellow-500 hover:text-black transition duration-600 px-4 py-2 rounded-lg"
            >
              Schedule
            </a>
            <button
              onClick={handleBookingsClick}
              className="hover:bg-yellow-500 hover:text-black transition duration-600 px-4 py-2 rounded-lg"
            >
              My Bookings
            </button>
            <Link to="/login" className="flex items-center space-x-1 hover:bg-yellow-500 hover:text-black transition duration-600 px-4 py-2 rounded-lg">
              <UserCircle2 className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <button
              onClick={handleBackToHome}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition duration-600"
            >
              <FaHome className="mr-2" /> Home
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
