import { useState } from "react";

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
    <div className="flex flex-col items-center min-h-screen min-w-screen p-8 bg-[#052949] w-full">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
          🧪 Science Degree Courses
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row gap-6">
          <select
            className="w-full p-3 border border-white rounded-lg shadow-md bg-white/30 text-white text-lg focus:outline-none focus:ring-2 focus:ring-white"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedAddon("");
            }}
          >
            <option value="" disabled>Select Category</option>
            {scienceCourses.map((course, index) => (
              <option key={index} value={course.category} className="text-black">
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
              <option value="" disabled>Select Specialization</option>
              {scienceCourses
                .find((course) => course.category === selectedCategory)
                ?.addons.map((addon, index) => (
                  <option key={index} value={addon.name} className="text-black">
                    {addon.name}
                  </option>
                ))}
            </select>
          )}
        </div>

        {/* College Cards */}
        {selectedAddon && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {scienceCourses
              .find((course) => course.category === selectedCategory)
              ?.addons.find((addon) => addon.name === selectedAddon)
              ?.colleges.map((college, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-xl bg-white/30 backdrop-blur-md text-white text-center transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mb-4 text-3xl font-bold shadow-lg">
                    🧬
                  </div>
                  <h2 className="text-xl font-semibold">{college}</h2>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}