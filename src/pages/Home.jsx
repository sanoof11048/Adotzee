import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/homeComponents/Intro";
import About from "../components/homeComponents/About";
import Services from "../components/homeComponents/Services";
import Contact from "../components/homeComponents/Contact";
// import MarqueeText from "../components/homeComponents/MarqueeText";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <Navbar />
      <Intro/>
      <About/>
      {/* <MarqueeText/> */}
      <Services/>
      <Contact/>
          <a
        href="#intro"
        className="fixed bottom-4 right-4 bg-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        ↑
      </a>
    </div>
  );
}

export default Home;
