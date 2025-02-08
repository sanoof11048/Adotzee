import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../../particles/particle";

function Intro() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const images = [
    "https://www.iesonline.co.in/colleges-image/top-colleges-in-bangalore.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipP5PmmX_TPfOX_rko-CW0dsYYev03dRUShwZGGs=s1360-w1360-h1020",
    "https://www.gopalancolleges.com/gcem/images/gopalan-engineering-college.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center min-h-screen text-gray-800 text-center bg-gray-100 overflow-hidden pt-15 pb-10 ">
      {/* Particles Limited to the Intro Section */}
      <div className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Content Box */}
      <div className="w-full mt-10 max-w-4xl bg-white shadow-xl mx-10 rounded-3xl p-6 sm:p-8 md:p-10 relative z-10">
        <h1 className="text-2xl sm:text-2xl md:text-5xl font-extrabold leading-tight mb-4">
          Are You Looking <span className="text-blue-600">for College Admission</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
          Join a network of degree students guiding new learners in securing admissions for
          <span className="text-blue-500"> Science, Humanities, and Commerce</span>.
        </p>
        <p className="text-md sm:text-lg md:text-xl text-gray-500 mb-6">
Choose the Stream for Future <span className="animate-bounce motion-safe:animate-bounce">↓</span>



        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate("/science")}
            className="bg-blue-7 hover:bg-blue-500 hover:text-gray-2 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold  shadow-md transition duration-300 w-full sm:w-auto"
          >
            Do Degree in Science
          </button>
          <button
            onClick={() => navigate("/commerce")}
            className="bg-primary hover:bg-blue-700 hover:text-gray-2 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md transition duration-300 w-full sm:w-auto"
          >
            Do Degree in Commerce
          </button>
          <button
            onClick={() => navigate("/humanities")}
            className="bg-blue-7 hover:bg-blue-500 hover:text-gray-2 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md transition duration-300 w-full sm:w-auto"
          >
            Do Degree in Humanities
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
