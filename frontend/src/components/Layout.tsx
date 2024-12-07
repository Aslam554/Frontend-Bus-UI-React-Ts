import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
       {/* LED Display */}
       <div className=" p-1  overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-xl  text-red-500 inline-block font-orbitron">
              Next Bus: H101 - 08:00 AM • H202 - 08:30 AM • H303 - 09:00 AM • 
            </span>
          </div>
        </div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;