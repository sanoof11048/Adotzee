import { createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const scienceCourses = [
    {
      category: "BSc Physics",
      addons: [
        {
          name: "BSc Physics (Hons)",
          colleges: ["Quantum Physics Institute", "Astro Physics University"],
        },
        {
          name: "BSc Applied Physics",
          colleges: ["Applied Sciences Academy", "Tech Physics College"],
        },
        {
          name: "BSc Nuclear Physics",
          colleges: ["Nuclear Research Institute", "Energy Physics University"],
        },
      ],
    },
    {
      category: "BSc Chemistry",
      addons: [
        {
          name: "BSc Chemistry (Hons)",
          colleges: [
            "Chemical Sciences Institute",
            "Organic Chemistry University",
          ],
        },
        {
          name: "BSc Analytical Chemistry",
          colleges: ["Analytical Research Academy", "Chemistry Tech College"],
        },
        {
          name: "BSc Industrial Chemistry",
          colleges: [
            "Industrial Chemistry Institute",
            "Applied Chemistry University",
          ],
        },
      ],
    },
    {
      category: "BSc Biology",
      addons: [
        {
          name: "BSc Biology (Hons)",
          colleges: ["Life Sciences Institute", "Bio Research University"],
        },
        {
          name: "BSc Microbiology",
          colleges: ["Microbiology Academy", "BioTech University"],
        },
        {
          name: "BSc Biotechnology",
          colleges: ["Biotech Research Institute", "Genetics University"],
        },
      ],
    },
    {
      category: "BSc Mathematics",
      addons: [
        {
          name: "BSc Mathematics (Hons)",
          colleges: ["Pure Mathematics Institute", "Advanced Math University"],
        },
        {
          name: "BSc Applied Mathematics",
          colleges: ["Applied Math Academy", "Math Tech College"],
        },
        {
          name: "BSc Statistics",
          colleges: [
            "Statistical Research Institute",
            "Data Science University",
          ],
        },
      ],
    },
    {
      category: "BSc Computer Science",
      addons: [
        {
          name: "BSc CS (AI & ML)",
          colleges: ["AI Research Institute", "Machine Learning University"],
        },
        {
          name: "BSc CS (Data Science)",
          colleges: ["Data Analytics Academy", "Big Data University"],
        },
        {
          name: "BSc CS (Cyber Security)",
          colleges: ["Cyber Security Institute", "SecureNet University"],
        },
      ],
    },
  ];
  const commerceCourses = [
    {
        "category": "BBA",
        "addons": [
            {
                "name": "BBA",
                "colleges": [
                    "Acharya", "Presidency", "Krupanidhi", "Srinivas", "MS Ramiyah",
                    "Yenepoya", "Jain University", "Brindavan", "SEA", "S-Vyasa",
                    "HKBK", "RR Institution", "Karnataka College", "Christian College", "MVM College"
                ]
            },
            {
                "name": "BBA + Business Analytics",
                "colleges": ["Acharya", "Presidency", "Jain University", "Brindavan"]
            },
            {
                "name": "BBA + Digital Marketing",
                "colleges": ["Acharya", "Presidency"]
            },
            {
                "name": "BBA + Logistics and Digital Marketing",
                "colleges": ["Brindavan"]
            },
            {
                "name": "BBA + Aviation",
                "colleges": [
                    "Krupanidhi", "Srinivas", "Acharya", "East West College of Management",
                    "IZEE Business School", "Brindavan", "Presidency", "RR Institution", "MVM College"
                ]
            },
            {
                "name": "BBA + Logistics and Aviation",
                "colleges": [
                    "Yenepoya Bangalore", "Brindavan", "Yenepoya", "Krupanidhi",
                    "S-Vyasa", "Srinivas"
                ]
            },
            {
                "name": "BBA + Hospital Administration",
                "colleges": [
                    "Srinivas", "Brindavan", "Yenepoya Bangalore", "Yenepoya"
                ]
            },
            {
                "name": "BBA + Sports Management",
                "colleges": ["S-Vyasa", "Jain University"]
            },
            {
                "name": "BBA Hospitality Management",
                "colleges": ["Yenepoya"]
            },
            {
                "name": "BBA IATA",
                "colleges": ["Christian College"]
            },
            {
                "name": "BBA Aviation Airport Management",
                "colleges": ["Karnataka College"]
            },
            {
                "name": "BBA Finance & Accounts",
                "colleges": ["Jain University"]
            },
            {
                "name": "BBA Strategic Finance/Event Management",
                "colleges": ["Jain University"]
            },
            {
                "name": "BBA Branding & Advertising",
                "colleges": ["Jain University"]
            },
            {
                "name": "BBA Global Business",
                "colleges": ["Jain University"]
            },
            {
                "name": "BBA Digital Business",
                "colleges": ["Jain University"]
            }
        ]
    },
    {
        "category": "B.COM",
        "addons": [
            {
                "name": "B.COM",
                "colleges": [
                    "Acharya", "Jain University", "MS Ramiyah", "Srinivas",
                    "East West College of Management", "Brindavan", "Karnataka College",
                    "Christian College", "MVM College"
                ]
            },
            {
                "name": "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
                "colleges": ["Yenepoya", "Srinivas", "S-Vyasa"]
            },
            {
                "name": "B.COM ACCA",
                "colleges": ["Acharya", "Krupanidhi", "Presidency", "Brindavan", "East West College of Management", "Christian College"]
            },
            {
                "name": "B.COM BUSINESS ANALYTICS",
                "colleges": ["Acharya", "Presidency"]
            },
            {
                "name": "B.COM LOGISTICS",
                "colleges": ["Brindavan", "Christian College"]
            },
            {
                "name": "B.COM LOGISTICS & AVIATION",
                "colleges": ["Brindavan", "Yenepoya"]
            },
            {
                "name": "B.COM SHIPPING & LOGISTICS MANAGEMENT",
                "colleges": ["East West College of Management"]
            },
            {
                "name": "B.COM SAP",
                "colleges": ["IZEE Business School"]
            },
            {
                "name": "B.COM BANKING",
                "colleges": ["Brindavan"]
            },
            {
                "name": "B.COM BANKING & FINANCE",
                "colleges": ["Presidency"]
            },
            {
                "name": "B.COM (AVIATION, LOGISTIC & SUPPLY CHAIN)",
                "colleges": ["RR Institution"]
            },
            {
                "name": "B.COM IAF WITH ACCA, CORPORATE ACCOUNTING / INVESTMENT BANKING CMA",
                "colleges": ["Jain University"]
            },
            {
                "name": "B.COM GLOBAL PROFESSIONAL QUALIFICATION - BA / CPA / RM / LSCM / FT",
                "colleges": ["Jain University"]
            }
        ]
    },
    {
      "category": "BVA",
      "addons": [
        {
          "name": "BVA",
          "colleges": ["Acharya"]
        },
        {
          "name": "BVA - Game Art and Animation",
          "colleges": ["Acharya"]
        },
        {
          "name": "BVA - Graphics and Communication Design",
          "colleges": ["Acharya"]
        },
        {
          "name": "BVA - Product Design",
          "colleges": ["Acharya", "MS Ramaiah"]
        },
        {
          "name": "BVA - Interior and Spatial Design",
          "colleges": ["Acharya"]
        },
        {
          "name": "BVA - Fashion Design",
          "colleges": ["MS Ramaiah"]
        },
        {
          "name": "BVA - Interaction Design",
          "colleges": ["MS Ramaiah"]
        },
        {
          "name": "BVA - Fashion and Apparel Design",
          "colleges": ["Acharya"]
        }
      ]
    },
    {
      "category": "BA",
      "addons": [
        {
          "name": "BA - Criminology",
          "colleges": ["Acharya", "SEA"]
        },
        {
          "name": "BA - Journalism & Mass Communication",
          "colleges": ["Srinivas", "Presidency"]
        },
        {
          "name": "BA - Economics",
          "colleges": ["SEA", "Jain University"]
        },
        {
          "name": "BA - Psychology",
          "colleges": ["SEA", "Presidency"]
        },
        {
          "name": "BA - History",
          "colleges": ["SEA"]
        },
        {
          "name": "BA - Political Science",
          "colleges": ["SEA"]
        },
        {
          "name": "BA / B.Des - Animation",
          "colleges": ["Yenepoya"]
        },
        {
          "name": "BA / B.Des - Graphic Design",
          "colleges": ["Yenepoya"]
        },
        {
          "name": "BA / B.Des - Visual Effects",
          "colleges": ["Yenepoya"]
        },
        {
          "name": "BA / B.Des - Fashion Design",
          "colleges": ["Yenepoya"]
        },
        {
          "name": "BA - Sports Studies",
          "colleges": ["Yenepoya"]
        }
      ]
    }
    
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
    "Acharya": "Bengaluru",
    "Presidency": "Bengaluru",
    "Krupanidhi": "Bengaluru",
    "Srinivas": "Bengaluru",
    "MS Ramiyah": "Bengaluru",
    "Yenepoya": "Mangalore",
    "Jain University": "Bengaluru",
    "Brindavan": "Bengaluru",
    "SEA": "Bengaluru",
    "S-Vyasa": "Bengaluru",
    "HKBK": "Bengaluru",
    "RR Institution": "Bengaluru",
    "Karnataka College": "Bengaluru",
    "Christian College": "Bengaluru",
    "MVM College": "Bengaluru",
    "Yenepoya Bangalore": "Bengaluru",
    "East West College of Management": "Bengaluru",
    "IZEE Business School": "Bengaluru",
    "MS Ramaiah": "Bengaluru"
};

  
  
  return (
    <CourseContext.Provider
      value={{
        coursesData,
        scienceCourses,
        commerceCourses,
        humanitiesCourses,
        collegeLocations,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
