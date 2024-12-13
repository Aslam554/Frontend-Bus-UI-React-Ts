import React from 'react';
import { Bus, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bus1 from '../assets/bus1.jpg';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import bus4 from '../assets/bus4.jpg';
import bus5 from '../assets/bus5.jpg';
import bus6 from '../assets/bus6.jpg';

const featuredBuses = [
  {
    id: 1,
    imgs: bus1,
    routeNumber: "B101",
    from: "CMH Hostel",
    to: "Tezpur Town",
    departureTime: "08:00 AM",
    availableSeats: 20,
    totalSeats: 25,
    price: 40.50
  },
  {
    id: 2,
    imgs: bus2,
    routeNumber: "B202",
    from: "Town Tezpur",
    to: "Engineering Block",
    departureTime: "08:30 AM",
    availableSeats: 15,
    totalSeats: 30,
    price: 64.50
  },
  {
    id: 3,
    imgs: bus3,
    routeNumber: "B303",
    from: "Main Bus Stand",
    to: "Tezpur Town",
    departureTime: "09:00 AM",
    availableSeats: 10,
    totalSeats: 60,
    price: 99.00
  },
  {
    id: 4,
    imgs: bus4,
    routeNumber: "B404",
    from: "Soe Buildings",
    to: "Tezpur Town",
    departureTime: "09:30 AM",
    availableSeats: 25,
    totalSeats: 40,
    price: 50.00
  },
  {
    id: 5,
    imgs: bus5,
    routeNumber: "B505",
    from: "Tezpur Town",
    to: "Science Departments",
    departureTime: "10:30 AM",
    availableSeats: 15,
    totalSeats: 40,
    price: 75.50
  },
  {
    id: 6,
    imgs: bus6,
    routeNumber: "B606",
    from: "Tezpur Town",
    to: "Tezpur University",
    departureTime: "11:00 AM",
    availableSeats: 30,
    totalSeats: 40,
    price: 45.50
  }
];

const FeaturedBuses = () => {
  const navigate = useNavigate();
  const handleBookBus = () => {
    navigate('/add-bus');
  };
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Featured Bus Routes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBuses.map((bus) => (
            <div
              key={bus.id}
              className="relative font-serif font-bold bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden "
              data-aos="fade-up"
              data-aos-delay={bus.id * 100}
            >
              <img
                src={bus.imgs}
                alt={`Bus ${bus.id}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black opacity-30 z-10 hover:duration-200 hover:transition-all hover:ease-in-out hover:scale-[1.05] hover:shadow-2xl"></div>
              <div className="relative z-20 p-4 bg-indigo-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bus className="h-6 w-6 text-white" />
                    <span className="text-white font-bold">{bus.routeNumber}</span>
                  </div>
                  {/* <span className="text-white font-bold">Rs {bus.price} /-</span> */}
                </div>
              </div>
              <div className="relative z-20 p-6">
                <div className="mb-4">
                  <div className="text-white">From</div>
                  <div className="font-semibold text-white">{bus.from}</div>
                </div>
                <div className="mb-4">
                  <div className="text-white">To</div>
                  <div className="font-semibold text-white">{bus.to}</div>
                </div>
                <div className="mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-white" />
                  <span className="font-semibold text-white">{bus.departureTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-white" />
                  <span className="font-semibold text-white">
                    {bus.availableSeats} seats available
                  </span>
                </div>
                <div className="mt-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{
                      width: `${(bus.availableSeats / bus.totalSeats) * 100}%`,
                    }}
                  />
                </div>
                <button onClick={handleBookBus} className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-yellow-400 hover:text-black transition duration-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBuses;
