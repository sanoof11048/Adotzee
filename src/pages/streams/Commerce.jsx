import { useState } from "react";

const commerceCourses = [
  {
    name: "BCom Accounting",
    details: [
      { college: "ABC Commerce College", fee: "₹40,000 per year" },
      { college: "XYZ Business School", fee: "₹38,000 per year" },
    ],
  },
  {
    name: "BBA Finance",
    details: [
      { college: "LMN Management Institute", fee: "₹60,000 per year" },
      { college: "OPQ University", fee: "₹55,000 per year" },
    ],
  },
  {
    name: "BCom Marketing",
    details: [
      { college: "Global Business Academy", fee: "₹50,000 per year" },
      { college: "City Commerce College", fee: "₹45,000 per year" },
    ],
  },
];

export default function Commerce() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4 text-center">Commerce Degree Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {commerceCourses.map((course, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-md cursor-pointer transition-all ${
              activeIndex === index ? "bg-green-300" : "bg-white"
            }`}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <h2 className="text-lg font-semibold">{course.name}</h2>
            {activeIndex === index && (
              <ul className="mt-2">
                {course.details.map((detail, idx) => (
                  <li key={idx} className="p-2 border-b last:border-none">
                    <strong>{detail.college}</strong> - {detail.fee}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
