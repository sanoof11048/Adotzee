import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import { useCourse } from "../../components/Context/courseData";

export default function Commerce() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddon, setSelectedAddon] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { commerceCourses } = useCourse();

  // Simulating student count
  const [studentCount, setStudentCount] = useState(89);
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount((prev) => prev + Math.floor(Math.random() * 5));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const selectedColleges =
    commerceCourses
      .find((course) => course.category === selectedCategory)
      ?.addons.find((addon) => addon.name === selectedAddon)?.colleges || [];

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen min-w-screen bg-gradient-to-br from-[#041C32] to-[#04293A] w-fit pt-10">
        <h1 className="pt-10 mt-0 text-white text-4xl font-extrabold text-center">
          🚀 Find Your Path in Commerce
        </h1>
        
        <p className="text-white text-lg mt-3">🎓 Over <span className="text-yellow-400 font-bold">{studentCount}</span> students have started their careers with us!</p>
        
        <div className="mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-fit  md:min-w-5xl mt-10 mx-8">
          <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
            💼 Commerce Degree Courses
          </h1>
          
          <p className="text-center text-white text-lg mb-5">📢 **Limited Seats Available – Secure Your Admission Today!**</p>
          
          {/* Category List */}
          <div className="flex flex-col gap-6  ">
            {commerceCourses.map((course, index) => (
              <div key={index} className="w-full ">
                <div
                  className={`cursor-pointer p-4 border border-white/40 rounded-lg shadow-md text-lg font-semibold 
                  transition-all duration-300 ease-in-out flex items-center justify-between gap-3
                  ${
                    selectedCategory === course.category
                      ? "bg-white text-black font-bold"
                      : "bg-transparent text-white hover:bg-white/20"
                  }`}
                  onClick={() => {
                    setSelectedCategory((prev) =>
                      prev === course.category ? "" : course.category
                    );
                    setSelectedAddon("");
                  }}
                >
                  📚 {course.category}
                  <FontAwesomeIcon 
                    icon={selectedCategory === course.category ? faChevronUp : faChevronDown} 
                    className="transition-transform duration-300" 
                  />
                </div>

                {/* Show Addon Courses Under Selected Category */}
                {selectedCategory === course.category && (
                  <div className="mt-3 bg-white/20 p-4 rounded-lg">
                    <h3 className="text-white text-lg font-semibold text-center mb-2">
                      🎯 Click an Addon Course to See Colleges
                    </h3>
                    <ul className="list-none flex flex-col gap-3">
                      {course.addons.map((addon, idx) => (
                        <li
                          key={idx}
                          className="p-3 bg-white/30 text-white rounded-lg shadow-md 
                          transition-transform hover:scale-101 cursor-pointer flex justify-between items-center"
                          onClick={() => {
                            setSelectedAddon(addon.name);
                            setIsModalOpen(true);
                          }}
                        >
                          <span className="text-lg font-medium">📖 {addon.name}</span>
                          <span className="text-sm text-white/80">🔍 Click for Colleges</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center  mt-30 text-center text-gray-400">
        <p>&copy; All Rights Reserved. ADOTZEE</p>

      <div className="flex space-x-3 mt-4 mb-10 ">
        <a
          href="https://www.facebook.com/share/1WeqyuRjTd/?mibextid=wwXIfr"
          rel="noopener noreferrer"
          target="_blank"
          className="group flex decoration-none  bg-blue-600 rounded-full p-2 items-center  shadow-md hover:bg-blue-700 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32"
        >
          <i className="fab fa-facebook text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </a>

        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/adotzee.inn"
          target="_blank"
          className="group flex items-center decoration-none bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32"
        >
          <i className="fab fa-instagram text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </a>

        <a
          href={`https://wa.me/918281060462?text=${encodeURIComponent(
            "Hello! I Need Admission"
          )}`}
          rel="noopener noreferrer"
          target="_blank"
          className="group decoration-none flex items-center bg-blue-600 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32"
          >
          <i className="fa-brands fa-whatsapp text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </a>
          </div>
      </div>
      </div>

      {/* Modal for College List */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold text-[#041C32] mb-4 text-center">
              🏛️ Colleges Offering {selectedAddon}
            </h2>
            <ul>
              {selectedColleges.map((college, index) => (
                <li
                  key={index}
                  className="p-2 border-b last:border-none text-[#041C32] flex justify-between items-center"
                >
                  🎓 {college}
                  <a
                    href={`https://wa.me/918281060462?text=${encodeURIComponent(
                      `I need to Know about ${selectedAddon} in ${college}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    📩 More Info
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Check Another Course
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="fixed bottom-5 right-5">
        <a
          href="https://wa.me/918281060462?text=I%20want%20admission%20assistance"
          rel="noopener noreferrer"
          target="_blank"
          className="group flex items-center bg-blue-500 rounded-full shadow-xl hover:bg-green-600 transition-all duration-800 overflow-hidden w-12 h-12 hover:w-48"
        >
          <span className="text-xl ms-2.5">📞</span>
          <span className="ml-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-100">
            Talk to an Expert
          </span>
        </a>
      </div>
      
     
    </>
  );
}
