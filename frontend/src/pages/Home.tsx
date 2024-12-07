import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Bus, Clock, Shield, CreditCard } from 'lucide-react';
import BusCarousel from '../components/BusCarousel';
import FeaturedBuses from '../components/FeaturedBuses';
import BusList from '../components/BusList';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleBookBus = () => {
    navigate('/add-bus');
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative">
        <BusCarousel />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleBookBus}
            className="px-4 py-2  bg-indigo-600 text-white rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition duration-600"
          >
            Book Bus
          </button>
        </div>
      </div>

      <div>
        <BusList />
      </div>

      {/* Featured Buses Section */}
      <FeaturedBuses />

      {/* Features */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HostelBus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <Bus className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regular Routes</h3>
              <p className="text-gray-600">
                Frequent buses between hostels and campus locations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <Clock className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications about bus timings and delays
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600">
                Verified drivers and regularly maintained buses
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Rules */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Booking Rules</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Advance Booking</h3>
                <p className="text-gray-600">Book your tickets at least 2 hours before departure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
