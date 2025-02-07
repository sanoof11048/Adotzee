import { useState } from "react";

const commerceCourses = [
  {
    category: "BCom",
    addons: [
      { name: "BCom Accounting", colleges: ["ABC Commerce College", "XYZ Business School"] },
      { name: "BCom Marketing", colleges: ["Global Business Academy", "City Commerce College"] },
      { name: "BCom Banking & Insurance", colleges: ["Banking Institute", "Finance & Insurance College"] },
      { name: "BCom Taxation", colleges: ["Tax Experts Academy", "Revenue Studies University"] },
      { name: "BCom E-Commerce", colleges: ["Digital Trade Institute", "E-Business University"] },
      { name: "BCom Business Analytics", colleges: ["Data Insights College", "Analytics & Commerce Institute"] },
      { name: "BCom Investment Management", colleges: ["Investment Academy", "Capital Markets University"] },
      { name: "BCom Financial Planning", colleges: ["Wealth Management College", "Future Finance University"] },
    ],
  },
  {
    category: "BBA",
    addons: [
      { name: "BBA Finance", colleges: ["LMN Management Institute", "OPQ University"] },
      { name: "BBA Marketing", colleges: ["Business Hub College", "Corporate Academy"] },
      { name: "BBA HR", colleges: ["HR Excellence College", "People Management University"] },
      { name: "BBA International Business", colleges: ["Global Trade Academy", "International Business School"] },
      { name: "BBA Supply Chain Management", colleges: ["Logistics Academy", "Supply Chain University"] },
      { name: "BBA Entrepreneurship", colleges: ["Startup University", "Business Founders Institute"] },
    ],
  },
  {
    category: "BCA",
    addons: [
      { name: "BCA AI & ML", colleges: ["Global IT Academy", "Tech Innovators University"] },
      { name: "BCA Cloud Computing", colleges: ["Cloud Academy", "Futuristic University"] },
      { name: "BCA Cyber Security", colleges: ["CyberTech Institute", "SecureNet University"] },
      { name: "BCA Data Science", colleges: ["Data Analytics Academy", "Smart Data University"] },
      { name: "BCA Software Development", colleges: ["Code Masters Institute", "Innovative Software Academy"] },
    ],
  },
];

export default function Commerce() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddon, setSelectedAddon] = useState("");

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-8 bg-[#052949] w-full">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
          💼 Commerce Degree Courses
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
            {commerceCourses.map((course, index) => (
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
              {commerceCourses
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
            {commerceCourses
              .find((course) => course.category === selectedCategory)
              ?.addons.find((addon) => addon.name === selectedAddon)
              ?.colleges.map((college, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-xl bg-white/30 backdrop-blur-md text-white text-center transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mb-4 text-3xl font-bold shadow-lg">
                    📊
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