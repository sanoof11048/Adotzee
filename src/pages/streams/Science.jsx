import { useState } from "react";
import Navbar from "../../components/Navbar";

const scienceCourses = [
  {
    category: "BSc Physics",
    addons: [
      { name: "BSc Physics (Hons)", colleges: ["Quantum Physics Institute", "Astro Physics University"] },
      { name: "BSc Applied Physics", colleges: ["Applied Sciences Academy", "Tech Physics College"] },
      { name: "BSc Nuclear Physics", colleges: ["Nuclear Research Institute", "Energy Physics University"] },
    ],
  },
  {
    category: "BSc Chemistry",
    addons: [
      { name: "BSc Chemistry (Hons)", colleges: ["Chemical Sciences Institute", "Organic Chemistry University"] },
      { name: "BSc Analytical Chemistry", colleges: ["Analytical Research Academy", "Chemistry Tech College"] },
      { name: "BSc Industrial Chemistry", colleges: ["Industrial Chemistry Institute", "Applied Chemistry University"] },
    ],
  },
  {
    category: "BSc Biology",
    addons: [
      { name: "BSc Biology (Hons)", colleges: ["Life Sciences Institute", "Bio Research University"] },
      { name: "BSc Microbiology", colleges: ["Microbiology Academy", "BioTech University"] },
      { name: "BSc Biotechnology", colleges: ["Biotech Research Institute", "Genetics University"] },
    ],
  },
  {
    category: "BSc Mathematics",
    addons: [
      { name: "BSc Mathematics (Hons)", colleges: ["Pure Mathematics Institute", "Advanced Math University"] },
      { name: "BSc Applied Mathematics", colleges: ["Applied Math Academy", "Math Tech College"] },
      { name: "BSc Statistics", colleges: ["Statistical Research Institute", "Data Science University"] },
    ],
  },
  {
    category: "BSc Computer Science",
    addons: [
      { name: "BSc CS (AI & ML)", colleges: ["AI Research Institute", "Machine Learning University"] },
      { name: "BSc CS (Data Science)", colleges: ["Data Analytics Academy", "Big Data University"] },
      { name: "BSc CS (Cyber Security)", colleges: ["Cyber Security Institute", "SecureNet University"] },
    ],
  },
];

export default function Science() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddon, setSelectedAddon] = useState("");

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-[#052949] w-full">
   <h1 className="mt-30 text-white">Browrse Your Career</h1>
    
    <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-fit m-20 max-w-5xl">
      <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
        💼 Science Degree Courses
      </h1>

      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row gap-6 ">
        <select
          className="w-full p-3 border border-white rounded-lg shadow-md bg-white/30 text-white text-lg focus:outline-none focus:ring-2 focus:ring-white"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedAddon("");
          }}
        >
          <option value="" disabled>
            Select Course
          </option>
          {scienceCourses.map((course, index) => (
            <option
              key={index}
              value={course.category}
              className="text-black"
            >
              {course.category}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <select
            className="w-full p-3 border border-white rounded-lg shadow-md bg-white/30 text-white text-lg focus:outline-none focus:ring-2 focus:ring-white"
            value={selectedAddon}
            onChange={(e) => setSelectedAddon(e.target.value)}
          >
            <option value="" disabled>
              Select Specialization
            </option>
            {scienceCourses
              .find((course) => course.category === selectedCategory)
              ?.addons.map((addon, index) => (
                <option
                  key={index}
                  value={addon.name}
                  className="text-black text-xs"
                >
                  {addon.name}
                </option>
              ))}
          </select>
        )}
      </div>

      {/* College Cards */}
      {selectedAddon && (
        <div className="mt-8 w-full">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Colleges Offering Your Course
          </h2>
          <div className="flex flex-col gap-6 w-full">
            {scienceCourses
              .find((course) => course.category === selectedCategory)
              ?.addons.find((addon) => addon.name === selectedAddon)
              ?.colleges.map((college, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl shadow-lg bg-white/20 backdrop-blur-md text-white transition-transform hover:scale-101 hover:shadow-2xl flex flex-col md:flex-row items-center justify-between border border-white/30"
                >
                  <h2 className="text-2xl font-semibold w-full text-center md:text-left">
                    {college}
                  </h2>
                  <a
                    href={`https://wa.me/918281060462?text=${encodeURIComponent(
                      `I need to Know about ${selectedAddon} in ${college}`
                    )}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="md:mt-0 text-sm text-white bg-blue-600 px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Fees Details & More Info
                  </a>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  </div>
  </>

  );
}