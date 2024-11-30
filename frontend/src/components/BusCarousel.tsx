import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1920&q=80",
      title: "Campus Express",
      description: "Direct routes to all campus locations"
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=80",
      title: "Hostel Connect",
      description: "Regular services from all hostels"
    },
    {
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1920&q=80",
      title: "Night Service",
      description: "Safe travel for late-night studies"
    }
  ];

  return (
    <div className="relative" data-aos="fade-up">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
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