import React from 'react';
import { Bus, Clock, Users } from 'lucide-react';

const featuredBuses = [
  {
    id: 1,
    routeNumber: "H101",
    from: "North Hostel",
    to: "Main Campus",
    departureTime: "08:00 AM",
    availableSeats: 25,
    totalSeats: 40,
    price: 2.50
  },
  {
    id: 2,
    routeNumber: "H202",
    from: "South Hostel",
    to: "Engineering Block",
    departureTime: "08:30 AM",
    availableSeats: 15,
    totalSeats: 40,
    price: 2.50
  },
  {
    id: 3,
    routeNumber: "H303",
    from: "East Hostel",
    to: "Library Complex",
    departureTime: "09:00 AM",
    availableSeats: 30,
    totalSeats: 40,
    price: 2.50
  }
];

const FeaturedBuses = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* LED Display */}
      <div className="bg-black p-6 mb-12 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-5xl font-bold text-red-500 inline-block">
            Next Bus: H101 - 08:00 AM • H202 - 08:30 AM • H303 - 09:00 AM • 
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Featured Bus Routes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBuses.map((bus) => (
            <div
              key={bus.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={bus.id * 100}
            >
              <div className="bg-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bus className="h-6 w-6 text-white" />
                    <span className="text-white font-bold">{bus.routeNumber}</span>
                  </div>
                  <span className="text-white font-bold">${bus.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="text-gray-600">From</div>
                  <div className="font-semibold">{bus.from}</div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-600">To</div>
                  <div className="font-semibold">{bus.to}</div>
                </div>

                <div className="mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <span className="font-semibold">{bus.departureTime}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-indigo-600" />
                  <span className="font-semibold">
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

                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
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