import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/homeComponents/Intro";
import About from "../components/homeComponents/About";
import Services from "../components/homeComponents/Services";
import Contact from "../components/homeComponents/Contact";
import { useNavigate } from "react-router-dom";
import StreamSelector from "./sample";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Contact />
      <StreamSelector/>
      <a
        onClick={() => navigate("/")}
        className="fixed bottom-4 right-4 bg-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        <i className="fa-solid fa-message text-white text-2xl ml-1.5"></i>
      </a>
    </div>
  );
}

export default Home;
