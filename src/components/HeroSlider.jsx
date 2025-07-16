import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



import { Link } from "react-router-dom";

const HeroSection = () => {
  const slides = [
    {
      background: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg',
      headline: "Unlock Your Learning Potential with TutorFlow",
      subheadline: "Connect with expert tutors worldwide and master any subject.",
      cta: "Find Your Tutor",
    },
    {
      background: 'https://images.pexels.com/photos/8828615/pexels-photo-8828615.jpeg',
      headline: "Learn Anytime, Anywhere",
      subheadline: "Book sessions and access personalized learning easily.",
      cta: "Start Learning",
    },
    {
      background: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg',
      headline: "Join a Global Learning Community",
      subheadline: "Discover tutors and grow with learners worldwide.",
      cta: "Explore Tutors",
    },
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
    padding: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
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
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
                {slide.headline}
              </h1>
              <p style={{ fontSize: "1.5rem", marginBlock: "1.5rem", maxWidth: "600px", marginInline: "auto" }}>
                {slide.subheadline}
              </p>
              <Link to='/find-tutors'><button
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
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