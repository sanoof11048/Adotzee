import { useState } from "react";

const humanitiesCourses = [
  {
    category: "BA English",
    addons: [
      { name: "BA English (Hons)", colleges: ["Literature Institute", "Creative Writing University"] },
      { name: "BA English Literature", colleges: ["Classic Literature Academy", "Modern English University"] },
      { name: "BA Linguistics", colleges: ["Language Studies Institute", "Linguistics Research University"] },
    ],
  },
  {
    category: "BA History",
    addons: [
      { name: "BA History (Hons)", colleges: ["Ancient History Institute", "World History University"] },
      { name: "BA Archaeology", colleges: ["Archaeological Research Academy", "Heritage Studies University"] },
      { name: "BA Art History", colleges: ["Art History Institute", "Cultural Studies University"] },
    ],
  },
  {
    category: "BA Psychology",
    addons: [
      { name: "BA Psychology (Hons)", colleges: ["Behavioral Sciences Institute", "Cognitive Psychology University"] },
      { name: "BA Clinical Psychology", colleges: ["Mental Health Academy", "Therapeutic Studies University"] },
      { name: "BA Counseling Psychology", colleges: ["Counseling Institute", "Human Behavior University"] },
    ],
  },
  {
    category: "BA Sociology",
    addons: [
      { name: "BA Sociology (Hons)", colleges: ["Social Sciences Institute", "Sociology Research University"] },
      { name: "BA Anthropology", colleges: ["Cultural Anthropology Academy", "Human Studies University"] },
      { name: "BA Social Work", colleges: ["Community Development Institute", "Social Welfare University"] },
    ],
  },
  {
    category: "BA Political Science",
    addons: [
      { name: "BA Political Science (Hons)", colleges: ["Political Theory Institute", "Global Politics University"] },
      { name: "BA International Relations", colleges: ["Diplomacy Academy", "Global Affairs University"] },
      { name: "BA Public Administration", colleges: ["Governance Institute", "Public Policy University"] },
    ],
  },
];

export default function Humanities() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddon, setSelectedAddon] = useState("");

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-8 bg-[#052949] w-full">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
          📚 Humanities Degree Courses
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
            {humanitiesCourses.map((course, index) => (
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
              {humanitiesCourses
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
            {humanitiesCourses
              .find((course) => course.category === selectedCategory)
              ?.addons.find((addon) => addon.name === selectedAddon)
              ?.colleges.map((college, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-xl bg-white/30 backdrop-blur-md text-white text-center transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mb-4 text-3xl font-bold shadow-lg">
                    📖
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