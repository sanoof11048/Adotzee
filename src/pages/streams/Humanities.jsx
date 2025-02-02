import { useState } from "react";

const humanitiesCourses = [
  {
    name: "BA History",
    details: [
      { college: "ABC Arts College", fee: "₹35,000 per year" },
      { college: "XYZ University", fee: "₹40,000 per year" },
    ],
  },
  {
    name: "BA English Literature",
    details: [
      { college: "LMN Language Institute", fee: "₹42,000 per year" },
      { college: "OPQ University", fee: "₹38,000 per year" },
    ],
  },
  {
    name: "BA Political Science",
    details: [
      { college: "National College", fee: "₹37,000 per year" },
      { college: "City Arts College", fee: "₹39,000 per year" },
    ],
  },
  {
    name: "BA Sociology",
    details: [
      { college: "Social Sciences Academy", fee: "₹36,000 per year" },
      { college: "Global University", fee: "₹41,000 per year" },
    ],
  },
  {
    name: "BA Philosophy",
    details: [
      { college: "Wisdom College", fee: "₹34,000 per year" },
      { college: "Metaphysics Institute", fee: "₹39,500 per year" },
    ],
  },
  {
    name: "BA Psychology",
    details: [
      { college: "Mind Academy", fee: "₹45,000 per year" },
      { college: "Behavioral Sciences University", fee: "₹50,000 per year" },
    ],
  },
  {
    name: "BA Economics",
    details: [
      { college: "Finance & Economics Institute", fee: "₹42,000 per year" },
      { college: "Commerce & Humanities College", fee: "₹44,000 per year" },
    ],
  }
];

export default function HumanitiesCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-6 font-sans max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Humanities Degree Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {humanitiesCourses.map((course, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg bg-white text-center hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setSelectedCourse(course)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{course.name}</h2>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div className="mt-8 p-6 border rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-xl font-semibold text-blue-700">{selectedCourse.name}</h2>
          <ul className="mt-4 space-y-3">
            {selectedCourse.details.map((detail, idx) => (
              <li key={idx} className="p-3 border rounded-md bg-white shadow-sm">
                <strong>{detail.college}</strong> - {detail.fee}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
