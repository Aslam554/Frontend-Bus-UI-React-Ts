import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bus1 from '../assets/bus1.jpg';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import bus4 from '../assets/bus4.jpg';
import bus5 from '../assets/bus5.jpg';
import bus6 from '../assets/bus6.jpg';
import bus7 from '../assets/bus7.jpg';
const BusCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: bus6,
      title: "Tezpur University Bus Service",
      description: "Direct routes to ASTC Bus Stand"
    },
    {
      image: bus2,
      title: "Hostel Connect",
      description: "Regular services from all hostels"
    },
    {
      image:bus5,
      title: "Tezpur University Bus Service",
      description: "ASTC Bus Stand"
    },
    {
      image:bus4,
      title: "Bus Service TU",
      description: "Safe journey for students"
    },
    {
      image: bus7,
      title: "ASTC Bus Stand",
      description: "Regular services from all hostels"
    },
    {
      image: bus1,
      title: "Hostel Connect",
      description: "Regular services from all hostels"
    },
    {
      image:bus3,
      title: "Night Service",
      description: "Safe travel for late-night studies"
    },
  ];

  return (
    <div className="relative" data-aos="fade-up">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[700px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">{slide.title}</h2>
              <p className="text-xl" data-aos="fade-up" data-aos-delay="200">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusCarousel;