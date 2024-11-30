import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, UserCircle2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bus className="h-8 w-8" />
            <span className="font-bold text-xl">HostelBus</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/schedule" className="hover:text-indigo-200">Schedule</Link>
            <Link to="/bookings" className="hover:text-indigo-200">My Bookings</Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <UserCircle2 className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;