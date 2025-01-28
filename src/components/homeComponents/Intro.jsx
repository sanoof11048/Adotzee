import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate= useNavigate() 
  const images = [
    "https://www.iesonline.co.in/colleges-image/top-colleges-in-bangalore.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipP5PmmX_TPfOX_rko-CW0dsYYev03dRUShwZGGs=s1360-w1360-h1020",
    "https://www.gopalancolleges.com/gcem/images/gopalan-engineering-college.jpg"
  ];

  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="w-full relative">
      {/* Full-screen background images for desktop view */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-10'} lg:block hidden`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
      ))}

      {/* Mobile background image only for first section */}
      <div className={`lg:hidden relative top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-10'}`}
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <section id="intro" className="relative text-center py-16 text-white z-10">
          <h2 className="text-4xl font-bold mb-4">
            'Adotzee: A Journey of Colorful Connections!'
          </h2>
          <p className="text-lg text-gray-300">
            Embark on your academic journey with tailored services across disciplines.
          </p>
        </section>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Intro Section */}
      <section id="intro" className="relative text-center py-16 text-white z-10 lg:block hidden">
        <h2 className="text-4xl font-bold mb-4">
          'Adotzee: A Journey of Colorful Connections!'
        </h2>
        <p className="text-lg text-gray-300">
          Embark on your academic journey with tailored services across disciplines.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-6 z-10 lg:mx-36">
       
        <div onClick={()=>navigate('/science')}  className="p-6 inset-0 bg-good bg-opacity-90 text-white rounded-lg shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Science</h3>
            <p>"Discover boundless opportunities in science with expert guidance for your academic and career growth."</p>
            <a className="text-secondary mt-4 block ">
              Services 
            </a>
          </div>
          <div onClick={()=>navigate('/commerce')} className="p-6 inset-0 bg-lightblue bg-opacity-80 text-white rounded-lg shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Commerce</h3>
            <p>"Unlock your potential in commerce with personalized support for academic success and future endeavors."</p>
            <a  className="text-secondary mt-4 block">
              Services 
            </a>
          </div>
          <div onClick={()=>navigate('/humanities')} className="p-6 inset-0 bg-good bg-opacity-90 text-white rounded-lg shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Humanities</h3>
            <p>"Explore diverse humanities pathways with expert guidance tailored to your educational and career aspirations."</p>
            <a className="text-secondary mt-4 block text-white">
              Services 
            </a>
          </div>
      </section>
    </div>
  );
}

export default Intro;
