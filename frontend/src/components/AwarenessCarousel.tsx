import React, { useState, useEffect } from 'react';
import bus1 from '../assets/bus1.jpg';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import bus4 from '../assets/bus4.jpg';
import bus5 from '../assets/bus5.jpg';
import bus6 from '../assets/bus6.jpg';

const banners = [
  {
    title: "Regular Routes",
    description: "Frequent buses between hostels and campus locations",
    image: bus1
  },
  {
    title: "Real-time Updates",
    description: " Get instant notifications about bus timings and delays",
    image: bus2
  },
  {
    title: "Safe Travel",
    description: " Verified drivers and regularly maintained buses",
    image: bus3
  },
  {
    "title": "Night Safety",
    "description": "Secure bus services for late-night travels",
    "image": bus4
  },
  {
    "title": "Weekend Trips",
    "description": "Special bus services for weekend outings",
    "image": bus5
  },
  {
    "title": "Morning Commute",
    "description": "Regular buses for your morning commute",
    "image": bus6
  }
];

export default function AwarenessCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[80%] mx-auto h-[600px] overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
            <p className="text-xl text-center">{banner.description}</p>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
