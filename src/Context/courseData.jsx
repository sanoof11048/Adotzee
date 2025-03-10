import { createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const scienceCourses = [
    {
      category: "B.Sc Nursing",
      addons: [
        {
          name: "General Nursing",
          colleges: [
            "MS Ramaiah",
            "RR Institution",
            "Pes",
            "Yenepoya",
            "Acharya",
            "Karnataka College",
            "Christian College",
            "Maurya Group Of Institutions",
            "Oxford Institutions Of Medical Science",
            "Koshys",
            "JSS College",
            "Adichunchanagiri College",
            "BGS Apollo",
            "Cauvery College",
            "Gopala Gawda College",
            "Vikram College",
            "St.Joseph College",
            "Vidya Vikas College",
            "St.Alphonsa College",
            "Sigma College",
            "Heritage City College",
            "Suyog College",
            "Vishwa Bharathi College",
            "Mother Teresa College",
            "Smt.Padma G Madegowda College",
          ],
        },
        {
          name: "GNM - General Nursing and Midwifery",
          colleges: [
            "MS Ramaiah",
            "Yenepoya",
            "Acharya",
            "Karnataka College",
            "Christian College",
            "Koshys",
          ],
        },
      ],
    },
    
    {
      category: "Engineering Courses",
      addons: [
        {
          name: "Computer Science & Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "RR",
            "MS Ramiyah",
          ],
        },
        {
          name: "Computer Science (Data Science)",
          colleges: [
            "Yenepoya",
            "Acharya",
            "S-VYASA",
            "SEA College",
          ],
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          colleges: [
            "Yenepoya",
            "Acharya",
            "S-VYASA",
            "RR",
            "Presidency",
            "MS Ramiyah",
            "SEA College",
          ],
        },
        {
          name: "Mechanical Engineering",
          colleges: [
            "Yenepoya",
            "Jain University",
            "Acharya",
            "Presidency",
            "MS Ramiyah",
            "SEA College",
          ],
        },
        {
          name: "Electrical & Electronics Engineering",
          colleges: [
            "Yenepoya",
            "RR",
            "Presidency",
            "MS Ramiyah",
          ],
        },
        {
          name: "Electronics & Communication Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "RR",
            "MS Ramiyah",
            "SEA College",
          ],
        },
        {
          name: "Civil Engineering",
          colleges: [
            "Acharya",
            "RR",
            "MS Ramiyah",
            "Presidency",
            "SEA College",
          ],
        },
        {
          name: "Information Science & Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "Presidency",
            "MS Ramiyah",
            "SEA College",
          ],
        },
        {
          name: "Aeronautical Engineering",
          colleges: [
            "Acharya",
          ],
        },
        {
          name: "Mechatronics Engineering",
          colleges: [
            "Acharya",
          ],
        },
        {
          name: "Bio Technology Engineering",
          colleges: [
            "Acharya",
          ],
        },
        {
          name: "Electric Vehicle Technology",
          colleges: [
            "Acharya",
          ],
        },
        {
          name: "Computer Science & Technology Engineering",
          colleges: [
            "S-VYASA",
            "RR",
            "Presidency",
          ],
        },
        {
          name: "Computer Science (Software Engineering)",
          colleges: [
            "S-VYASA",
          ],
        },
        {
          name: "Computer Science and Engineering (Cyber Security)",
          colleges: [
            "S-VYASA",
            "RR",
          ],
        },
        {
          name: "Mathematics & Computing Engineering",
          colleges: [
            "MS Ramiyah",
          ],
        },
        {
          name: "CS Engineering in Big Data",
          colleges: [
            "Presidency",
          ],
        },
        {
          name: "Petroleum Engineering",
          colleges: [
            "Presidency",
          ],
        },
        {
          name: "Aerospace Engineering",
          colleges: [
            "MS Ramiyah",
          ],
        },
        {
          name: "Automotive Engineering",
          colleges: [
            "MS Ramiyah",
          ],
        },
        {
          name: "Robotics Engineering",
          colleges: [
            "MS Ramiyah",
          ],
        },
        {
          name: "AI & Data Science Engineering",
          colleges: [
            "SEA College",
          ],
        },
        {
          name: "IoT & Cyber Security Engineering",
          colleges: [
            "SEA College",
          ],
        },
        {
          name: "Agricultural Engineering",
          colleges: [
            "SEA College",
          ],
        },
        {
          name: "AI & Robotics Engineering",
          colleges: [
            "Acharya",
          ],
        },
      ],
    },
  ];
  
  const commerceCourses = [
    {
      category: "BBA",
      addons: [
        {
          name: "BBA",
          colleges: [
            "Acharya",
            "Presidency",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya",
            "Jain University",
            "Brindavan",
            "SEA College",
            "S-Vyasa",
            "HKBK",
            "RR Institution",
            "Karnataka College",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Acharya", "Presidency", "Jain University", "Brindavan"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Acharya", "Presidency"],
        },
        {
          name: "BBA + Logistics and Digital Marketing",
          colleges: ["Brindavan"],
        },
        {
          name: "BBA + Aviation",
          colleges: [
            "Krupanidhi",
            "Srinivas University",
            "Acharya",
            "East West College of Management",
            "IZEE Business School",
            "Brindavan",
            "Presidency",
            "RR Institution",
            "MVM College",
          ],
        },
      ],
    },
    {
      category: "B.COM",
      addons: [
        {
          name: "B.COM",
          colleges: [
            "Acharya",
            "Jain University",
            "MS Ramaiah",
            "Srinivas University",
            "East West College of Management",
            "Brindavan",
            "Karnataka College",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
          colleges: ["Yenepoya", "Srinivas University", "S-Vyasa"],
        },
      ],
    },
    {
      category: "BCA",
      addons: [
        {
          name: "BCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Yenepoya",
            "Brindavan",
            "RR Institution",
            "S-Vyasa",
            "Karnataka College",
            "MVM College",
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["Acharya", "HKBK", "Presidency"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["Acharya", "HKBK"],
        },
      ],
    },

    {
      category: "BA",
      addons: [
        {
          name: "BA - Criminology",
          colleges: ["Acharya", "SEA College"],
        },
        {
          name: "BA - Journalism & Mass Communication",
          colleges: ["Srinivas University", "Presidency"],
        },
        {
          name: "BA - Economics",
          colleges: ["SEA College", "Jain University"],
        },
        {
          name: "BA - Psychology",
          colleges: ["SEA College", "Presidency"],
        },
        {
          name: "BA - History",
          colleges: ["SEA College"],
        },
        {
          name: "BA - Political Science",
          colleges: ["SEA College"],
        },
        {
          name: "BA , B.Des - Animation",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA , B.Des - Graphic Design",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA , B.Des - Visual Effects",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA , B.Des - Fashion Design",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA - Sports Studies",
          colleges: ["Yenepoya"],
        },
      ],
    },
    {
      category: "BVA",
      addons: [
        {
          name: "BVA",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Game Art and Animation",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Graphics and Communication Design",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Product Design",
          colleges: ["Acharya", "MS Ramaiah"],
        },
        {
          name: "BVA - Interior and Spatial Design",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Fashion Design",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "BVA - Interaction Design",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "BVA - Fashion and Apparel Design",
          colleges: ["Acharya"],
        },
      ],
    },

    {
      category: "BHM (Bachelor of Hotel Management)",
      addons: [
        {
          name: "BHM (Bachelor of Hotel Management)",
          colleges: ["MVM College"],
        },
      ],
    },
    {
      category: "Bachelors in Audiology & Speech Language Pathology",
      addons: [
        {
          name: "Bachelor in Audiology & Speech Language Pathology",
          colleges: ["Manipal University"],
        },
      ],
    },
    {
      category: "BMS",
      addons: [
        {
          name: "BMS - FS,THM,Aviation,IF",
          colleges: ["Jain University"],
        },
        {
          name: "BMS - Healthcare Management",
          colleges: ["Jain University"],
        },
      ],
    },
    {
      category: "B.Sc",
      addons: [
        {
          name: "B.Sc (Animation, DFM, Gaming)",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc Visual Communications",
          colleges: ["Jain University"],
        },
      ],
    },
  ];

  const humanitiesCourses = [
    {
      category: "BA English",
      addons: [
        {
          name: "BA English (Hons)",
          colleges: ["Literature Institute", "Creative Writing University"],
        },
        {
          name: "BA English Literature",
          colleges: ["Classic Literature Academy", "Modern English University"],
        },
        {
          name: "BA Linguistics",
          colleges: [
            "Language Studies Institute",
            "Linguistics Research University",
          ],
        },
      ],
    },
    {
      category: "BA History",
      addons: [
        {
          name: "BA History (Hons)",
          colleges: ["Ancient History Institute", "World History University"],
        },
        {
          name: "BA Archaeology",
          colleges: [
            "Archaeological Research Academy",
            "Heritage Studies University",
          ],
        },
        {
          name: "BA Art History",
          colleges: ["Art History Institute", "Cultural Studies University"],
        },
      ],
    },
    {
      category: "BA Psychology",
      addons: [
        {
          name: "BA Psychology (Hons)",
          colleges: [
            "Behavioral Sciences Institute",
            "Cognitive Psychology University",
          ],
        },
        {
          name: "BA Clinical Psychology",
          colleges: ["Mental Health Academy", "Therapeutic Studies University"],
        },
        {
          name: "BA Counseling Psychology",
          colleges: ["Counseling Institute", "Human Behavior University"],
        },
      ],
    },
    {
      category: "BA Sociology",
      addons: [
        {
          name: "BA Sociology (Hons)",
          colleges: [
            "Social Sciences Institute",
            "Sociology Research University",
          ],
        },
        {
          name: "BA Anthropology",
          colleges: [
            "Cultural Anthropology Academy",
            "Human Studies University",
          ],
        },
        {
          name: "BA Social Work",
          colleges: [
            "Community Development Institute",
            "Social Welfare University",
          ],
        },
      ],
    },
    {
      category: "BA Political Science",
      addons: [
        {
          name: "BA Political Science (Hons)",
          colleges: [
            "Political Theory Institute",
            "Global Politics University",
          ],
        },
        {
          name: "BA International Relations",
          colleges: ["Diplomacy Academy", "Global Affairs University"],
        },
        {
          name: "BA Public Administration",
          colleges: ["Governance Institute", "Public Policy University"],
        },
      ],
    },
  ];
  const coursesData = {
    science: [
      "B.Sc Physics",
      "B.Sc Chemistry",
      "B.Sc Mathematics",
      "B.Sc Biology",
      "B.Sc Computer Science",
      "B.Sc Biotechnology",
      "BCA (Bachelor of Computer Applications)",
      "B.Sc Nursing",
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Computer Science",
      "M.Sc Data Science",
      "MCA (Master of Computer Applications)",
      "Diploma in Medical Laboratory Technology (DMLT)",
      "Diploma in Radiology",
    ],

    humanities: [
      "B.A History",
      "B.A Political Science",
      "B.A Psychology",
      "B.A Sociology",
      "B.A English Literature",
      "B.A Economics",
      "M.A History",
      "M.A Political Science",
      "M.A Sociology",
      "M.A English Literature",
      "Diploma in Journalism",
      "Diploma in Psychology",
    ],

    commerce: [
      "B.Com (Bachelor of Commerce)",
      "BBA (Bachelor of Business Administration)",
      "BMS (Bachelor of Management Studies)",
      "B.Com Banking & Finance",
      "M.Com (Master of Commerce)",
      "MBA (Master of Business Administration)",
      "Diploma in Financial Accounting",
      "Diploma in Business Management",
    ],
  };

  const collegeLocations = {
    Acharya: "Bengaluru",
    ACHARYA: "Bengaluru",
    Presidency: "Bengaluru",
    Krupanidhi: "Bengaluru",
    "Srinivas University": "Mangalore",
    "MS Ramaiah": "Bengaluru",
    Yenepoya: "Mangalore",
    "Jain University": "Bengaluru",
    Brindavan: "Bengaluru",
    "SEA College": "Bengaluru",
    "S-Vyasa": "Bengaluru",
    HKBK: "Bengaluru",
    "RR Institution": "Bengaluru",
    "Karnataka College": "Bengaluru",
    "Christian College": "Bengaluru",
    "MVM College": "Bengaluru",
    "Yenepoya Bangalore": "Bengaluru",
    "East West College of Management": "Bengaluru",
    "IZEE Business School": "Bengaluru",
    "Maurya Group Of Institutions": "Mysore",
    Pes: "Bengaluru",
    "Oxford Institutions Of Medical Science": "Benagaluru",

    Koshys: "Bengaluru",
  };

  const dotzeeChoiceColleges = [
    "JAIN UNIVERSITY",
    "YENEPOYA",
    "MS RAMAIAH",
    "ACHARYA",
    "PRESIDANCY",
    "KRUPANIDHI",
  ];

  return (
    <CourseContext.Provider
      value={{
        coursesData,
        scienceCourses,
        commerceCourses,
        humanitiesCourses,
        collegeLocations,
        dotzeeChoiceColleges,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
