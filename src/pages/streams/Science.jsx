import { useState } from "react";

const courses = [
  {
    name: "BSc Physics",
    colleges: [
      { name: "ABC College", fee: "₹50,000 per year" },
      { name: "XYZ University", fee: "₹45,000 per year" },
    ],
  },
  {
    name: "BSc Chemistry",
    colleges: [
      { name: "LMN College", fee: "₹55,000 per year" },
      { name: "OPQ University", fee: "₹48,000 per year" },
    ],
  },
  {
    name: "BSc Computer Science",
    colleges: [
      { name: "Tech Institute", fee: "₹60,000 per year" },
      { name: "Global College", fee: "₹52,000 per year" },
    ],
  },
  {
    name: "BSc Biology",
    colleges: [
      { name: "Bio University", fee: "₹53,000 per year" },
      { name: "Science College", fee: "₹49,000 per year" },
    ],
  },
  {
    name: "BSc Mathematics",
    colleges: [
      { name: "Math Institute", fee: "₹55,000 per year" },
      { name: "Algebra College", fee: "₹50,000 per year" },
    ],
  },
  {
    name: "BSc Environmental Science",
    colleges: [
      { name: "Eco College", fee: "₹57,000 per year" },
      { name: "Green University", fee: "₹54,000 per year" },
    ],
  },
  {
    name: "BSc Geology",
    colleges: [
      { name: "Geo University", fee: "₹58,000 per year" },
      { name: "Rock College", fee: "₹56,000 per year" },
    ],
  },
  {
    name: "BSc Biotechnology",
    colleges: [
      { name: "BioTech College", fee: "₹62,000 per year" },
      { name: "Innovation University", fee: "₹60,000 per year" },
    ],
  },
  {
    name: "BSc Zoology",
    colleges: [
      { name: "Wildlife Institute", fee: "₹52,000 per year" },
      { name: "Nature College", fee: "₹50,000 per year" },
    ],
  },
  {
    name: "BSc Microbiology",
    colleges: [
      { name: "MicroBio Institute", fee: "₹64,000 per year" },
      { name: "Health College", fee: "₹60,000 per year" },
    ],
  },
  {
    name: "BSc Astronomy",
    colleges: [
      { name: "Star University", fee: "₹65,000 per year" },
      { name: "Space College", fee: "₹63,000 per year" },
    ],
  },
  {
    name: "BSc Botany",
    colleges: [
      { name: "Plant Science College", fee: "₹51,000 per year" },
      { name: "Flora University", fee: "₹53,000 per year" },
    ],
  },
  {
    name: "BSc Biochemistry",
    colleges: [
      { name: "BioChem College", fee: "₹58,000 per year" },
      { name: "Science Institute", fee: "₹55,000 per year" },
    ],
  },
  {
    name: "BSc Agricultural Science",
    colleges: [
      { name: "Agri College", fee: "₹60,000 per year" },
      { name: "Farming University", fee: "₹58,000 per year" },
    ],
  },
  {
    name: "BSc Forensic Science",
    colleges: [
      { name: "Forensic Institute", fee: "₹62,000 per year" },
      { name: "Criminal Science College", fee: "₹60,000 per year" },
    ],
  },
  {
    name: "BSc Food Technology",
    colleges: [
      { name: "FoodTech University", fee: "₹55,000 per year" },
      { name: "Culinary Science College", fee: "₹58,000 per year" },
    ],
  },
  {
    name: "BSc Marine Biology",
    colleges: [
      { name: "Oceanic College", fee: "₹63,000 per year" },
      { name: "Marine Science University", fee: "₹65,000 per year" },
    ],
  },
  {
    name: "BSc Genetics",
    colleges: [
      { name: "Gene College", fee: "₹60,000 per year" },
      { name: "Genetics Institute", fee: "₹62,000 per year" },
    ],
  },
  {
    name: "BSc Bioinformatics",
    colleges: [
      { name: "BioInfo College", fee: "₹65,000 per year" },
      { name: "TechnoBio University", fee: "₹63,000 per year" },
    ],
  },
  {
    name: "BSc Neuro Science",
    colleges: [
      { name: "Brain College", fee: "₹66,000 per year" },
      { name: "NeuroTech University", fee: "₹64,000 per year" },
    ],
  },
  {
    name: "BSc Materials Science",
    colleges: [
      { name: "Material College", fee: "₹59,000 per year" },
      { name: "Nano Science University", fee: "₹61,000 per year" },
    ],
  },
  {
    name: "BSc Industrial Chemistry",
    colleges: [
      { name: "IndustryChem College", fee: "₹60,000 per year" },
      { name: "TechChem University", fee: "₹62,000 per year" },
    ],
  },
  {
    name: "BSc Pharmaceutical Sciences",
    colleges: [
      { name: "Pharma College", fee: "₹65,000 per year" },
      { name: "MedTech University", fee: "₹63,000 per year" },
    ],
  },
  {
    name: "BSc Climate Science",
    colleges: [
      { name: "Climate Institute", fee: "₹61,000 per year" },
      { name: "Global Climate College", fee: "₹60,000 per year" },
    ],
  },
  {
    name: "BSc Quantum Physics",
    colleges: [
      { name: "Quantum University", fee: "₹68,000 per year" },
      { name: "Physics Institute", fee: "₹66,000 per year" },
    ],
  },
  {
    name: "BSc Nanotechnology",
    colleges: [
      { name: "NanoTech College", fee: "₹70,000 per year" },
      { name: "Nanoscience University", fee: "₹72,000 per year" },
    ],
  },
  {
    name: "BSc Artificial Intelligence",
    colleges: [
      { name: "AI College", fee: "₹80,000 per year" },
      { name: "TechAI University", fee: "₹78,000 per year" },
    ],
  },
  {
    name: "BSc Robotics",
    colleges: [
      { name: "Robotics Institute", fee: "₹75,000 per year" },
      { name: "TechRobots College", fee: "₹77,000 per year" },
    ],
  },
  {
    name: "BSc Astrophysics",
    colleges: [
      { name: "Astro College", fee: "₹67,000 per year" },
      { name: "Space Science University", fee: "₹69,000 per year" },
    ],
  },
  {
    name: "BSc Biotechnology Engineering",
    colleges: [
      { name: "BioEngg University", fee: "₹80,000 per year" },
      { name: "TechBio College", fee: "₹78,000 per year" },
    ],
  },
  {
    name: "BSc Cognitive Science",
    colleges: [
      { name: "Cognitive University", fee: "₹72,000 per year" },
      { name: "MindTech College", fee: "₹74,000 per year" },
    ],
  },
];


export default function Science() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4">Science Degree Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 bg-blue-200 rounded-md mb-2 hover:bg-blue-300"
            onClick={() => setSelectedCourse(course)}
          >
            {course.name}
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
          <h2 className="text-lg font-semibold">{selectedCourse.name}</h2>
          <ul className="mt-2">
            {selectedCourse.colleges.map((college, idx) => (
              <li key={idx} className="p-2 border-b last:border-none">
                <strong>{college.name}</strong> - {college.fee}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
