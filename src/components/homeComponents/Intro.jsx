import React, { useEffect, useState } from 'react';

function Intro() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://www.iesonline.co.in/colleges-image/top-colleges-in-bangalore.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipP5PmmX_TPfOX_rko-CW0dsYYev03dRUShwZGGs=s1360-w1360-h1020",
    "https://www.gopalancolleges.com/gcem/images/gopalan-engineering-college.jpg"
  ];

  const [fade, setFade] = useState(true);

  useEffect(() => {
    console.log(10+3+'')
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      {/* Full-screen background images for desktop view */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'} lg:block hidden`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Mobile background image */}
      <div className={`lg:hidden relative top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
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
      <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 z-10">
        {['Science', 'Commerce', 'Humanities'].map((title) => (
          <div key={title} className="p-6 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>Embark on your academic journey with our dedicated team guiding you through the admission process.</p>
            <a href={`#${title.toLowerCase()}`} className="text-secondary mt-4 block underline">
              Services &rarr;
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Intro;
