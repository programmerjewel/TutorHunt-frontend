import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import img1 from '../assets/img/bannerimg1.webp'
import img2 from '../assets/img/bannerimg2.webp'
import img3 from '../assets/img/bannerimg3.webp'
import img4 from '../assets/img/bannerimg4.webp'



const HeroSection = () => {
  const slides = [
    {
      background: img1,
      headline: "Unlock Your Learning Potential with TutorHunt",
      subheadline: "Connect with expert tutors worldwide and master any subject.",
      cta: "Find Your Tutor",
    },
    {
      background: img2,
      headline: "Learn Anytime, Anywhere",
      subheadline: "Book sessions and access personalized learning easily.",
      cta: "Start Learning",
    },
    {
      background: img3,
      headline: "Join a Global Learning Community",
      subheadline: "Discover tutors and grow with learners worldwide.",
      cta: "Explore Tutors",
    },
    {
      background: img4,
      headline: "Join in a big community",
      subheadline: "Learn from top native speakers acorss the world",
      cta: "Join Now",
    }
  ];

  const slideStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0, // Shorthand for top, left, right, bottom
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "1.25rem",
  };


  return (
    <Swiper navigation modules={[Navigation]} className="mySwiper">
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{ ...slideStyle, backgroundImage: `url(${slide.background})` }}
          >
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
              <h1 className="font-bold text-white text-5xl">
                {slide.headline}
              </h1>
              <p className='my-5 text-xl'>
                {slide.subheadline}
              </p>
              <Link to='/find-tutors'><button
                className="px-4 py-3 bg-violet-dark rounded-md text-md font-medium transition-all hover:bg-violet-600"
              >
                {slide.cta}
              </button></Link>
            </div> 
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;