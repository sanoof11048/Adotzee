import { createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const scienceCourses = [
    {
      category: " Nursing",
      addons: [
        {
          name: "Bsc Nursing",
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
            "Koshys College",
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
            "Bangalore City Group of Institutins",
            "East Point Medical College",
            "Hillside College",
            "Lakshmi Devi College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "Surya College",
            "SRM Main Campus",
            "Annai Meenakshi College",
            "Indiana College(Female only)",
            "Karavali College",
            "NET College",
            "Alphonsa College",
            "Cauvery College",
            "Maurya College",
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
            "Koshys College",
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
            "Jes Mother Teresa College",
            "Smt.Padma G Madegowda College",
            "East Point Medical College",
            "Hillside College",
            "Krupanidhi College",
            "Lakshmi Devi College",
            "Manjushree College",
            "Surya College"
          ],
        },
      ],
    },
    {
      category: "Paramedical",
      addons: [
        {
          name: "Imaging Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Acharya",
            "Christian College",
            "MVM College",
            "Manipal University",
            "Maurya Group Of Institutions",
            "Akash College",
            "Hillside College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "SEA College",
            "SRM Main Campus",
            "Indiana College",
            "Karaval College",
            "NET College",
            "Alphonsa College",
            "Maurya College",
          ],
        },
        {
          name: "Nuclear Medicine Technology",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
          colleges: [
            "Yenepoya",
            "Hillside College",
          ],
        },
        {
          name: "bsc biotechnology",
          colleges: [
            "Abbs",
            "MS Ramiyah",
          ],
        },
        {
          name: "Bachelor of Hospital Administration",
          colleges: [
            "Yenepoya",
            "Acharya",
            "MVM College",
          ],
        },
        {
          name: "Cardio Vascular Technology",
          colleges: [
            "Yenepoya",
            "Manipal University",
          ],
        },
        {
          name: "Bachelor of Homeopathic Medicine & Surgery (BHMS)",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Respiratory Therapy",
          colleges: [
            "Yenepoya",
            "Acharya",
            "Christian College",
            "MVM College",
            "Manipal University",
            "Maurya Group Of Institutions",
            "Koshys College",
            "Akash College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "Karavali College",
            "Maurya College",
          ],
        },
        {
          name: "B.Sc Renal Dialysis Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Acharya",
            "Christian College",
            "MVM College",
            "Koshys College",
            "Akash College",
            "Hillside College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "Indiana College",
            "karavali College",
          ],
        },
        {
          name: "Cardiac Care Technology",
          colleges: [
            "RR Institution",
            "MS Ramiyah",
            "Christian College",
            "Akash College",
            "East Point Medical College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "United College",
            "Indiana College",
            "Karvali College",
          ],
        },
        {
          name: "B.Sc Perfusion Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Christian College",
            "MVM College",
            "Akash College",
            "East Point Medical College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "Indiana College",
          ],
        },
        {
          name: "Bachelor in Naturopathy & Yogic Science",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Optometry",
          colleges: [
            "Yenepoya",
            "Akash College",
            "Manjushree College",
            "SRM Main Campus",
            "United College",
            "Karavali College",
          ],
        },
        {
          name: "B.Sc Neuroscience",
          colleges: [
            "Yenepoya",
            "MVM College",
            "Akash College",
            "SRM Main Campus",

          ],
        },
        {
          name: "B.Sc Microbiology",
          colleges: [
            "SRM Main Campus",
          ],
        },
        {
          name: "B.Sc Medical Laboratory Technology",
          colleges: [
            "RR Institution",
            "MVM College",
            "Maurya College Of Nursing",
            "Acharya",
            "Yenepoya",
            "Pes",
            "Koshys College",
            "Akash College",
            "East Point Medical College",
            "Hillside College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "Indiana College",
            "Karavali College",
            "Alphonsa College",
            "Maurya College",
          ],
        },
        {
          name: "B.Sc Radiotherapy Technology",
          colleges: [
            "Yenepoya",
            "Akash College",
            "Maurya College",
          ],
        },
        {
          name: "Bachelor of Physician Associate",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "Emergency Trauma Care",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "East Point Medical College",
            "Indiana College",
          ],
        },
        {
          name: "B.Sc Nutrition & Dietetics",
          colleges: [
            "Christian College",
            "SRM Main Campus",
          ],
        },
        {
          name: "Bachelor of Naturopathy & Yogic Sciences",
          colleges: [
            "MVM College",
          ],
        },
        {
          name: "Bachelor of Public Health",
          colleges: [
            "MVM College",
          ],
        },
        {
          name: "Bachelor of Physiotherapy",
          colleges: [
            "Manipal University",
            "Acharya",
            "East Point Medical College",
            "Christian College",
            "Hillside College",
            "Krupanidhi",
            "Lakshmi Devi College",
            "Pes",
            "MVM College",
            "Yenepoya",
            "Sapthagiri Medical College",
            "S-Vyasa",
            "Indiana College",
            "NET College",
          ],
        },
        {
          name: "B.Sc Renal Replacement Therapy & Dialysis Technology",
          colleges: [
            "Manipal University",
          ],
        },
        {
          name: "B.Sc Radiotherapy Technology",
          colleges: [
            "Manipal University",
          ],
        },
        {
          name: "B.Sc Genetics",
          colleges: [
            "Abbs",
          ],
        },
        {
          name: "bsc Anesthesia& Operation Theatre Technology ",
          colleges: [
            "Acharya",
            "Akash College",
            "East Point Medical College",
            "Hillside College",
            "Manjushree College",
            "pes",
            "RR Institition",
            "MS Ramiyah",
            "Yenepoya",
            "MVM College",
            "Sapthagiri Medical College",
            "SEA College",
            "SRM Main Campus",
            "United College",
            "Indiana College",
            "Karavali College",
            "Alphonsa College",
            "Maurya College",
          ],
        },
        {
          name: "bsc Emergrncy Medicine",
          colleges: [
            "Akash College",
          ],
        },
        {
          name: "Bach.Occupatational Therapy",
          colleges: [
            "East Point Medical College",
            "Yenepoya",
            "Acharya",
            "MVM College",
            "Indiana College",
            "Maurya College",
          ],
        },
        {
          name: "Bsc Dialysis Therapy Technology",
          colleges: [
            "Pes",
          ],
        },
        {
          name: "Bsc Medical Rediology & Imaging Technology",
          colleges: [
            "Pes",
          ],
        },
        {
          name: "Bsc Emergrncy Medical Technology",
          colleges: [
            "Pes",
          ],
        },
        {
          name: "Bsc Clinical Psychology",
          colleges: [
            "S-Vyasa",
          ],
        },
        {
          name: "Bsc Accident & Emergency Care Technology",
          colleges: [
            "SRM Main Campus",
            "United College",
          ],
        },
        {
          name: "Bsc Critical Care Technology",
          colleges: [
            "SRM Main Campus",
          ],
        },
        {
          name: "Bsc Medical Record Science",
          colleges: [
            "SRM Main Campus",
          ],
        },
        {
          name: "Bsc Cardic Pulmonary Perfusion Care Technology",
          colleges: [
            "United College",
          ],
        },
        {
          name: "Bsc Radiography&Imaging Technology",
          colleges: [
            "United College",
          ],
        },
        {
          name: "Bsc Physician Assistant",
          colleges: [
            "United College",
          ],
        },





      ],
    },
    {
      category: "Engineering Courses",
      addons: [
        {
          name: "Computer Science & Engineering",
          colleges: ["Yenepoya",
            "Acharya",
            "Presidency University",
            "RR Institution",
            "MS Ramaiah",
            "Akash College",
            "East Point College",
            "Jain University",
            "SEA COLLEGE",
            "S VYASA ",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Karavali College",
          ],
        },
        {
          name: "Computer Science (Data Science)",
          colleges: ["Yenepoya",
            "Acharya",
            "Jain University",
            "Presidency University",
            "S-VYASA",
            "SEA College",
            "Akash College",
            "East Point College",
            "SRM Main Campus",

          ],
        },
        {
          name: "CSE AI",
          colleges: ["Jain University",
            "SRM Main Campus",
            "Karavali College",
          ],
        },
        {
          name: "CSE AI & ML",
          colleges: [
            "Yenepoya",
            "Acharya",
            "S-VYASA",
            "RR Institution",
            "Presidency University",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "East Point College",
            "Jain University",
            "SRM Main Campus",
            "Hindhusthan College",
          ],
        },
        {
          name: "Computer Science Software Engineering",
          colleges: ["Yenepoya",
            "S-VYASA",
            "Jain University",
            "RR Institution",
          ],
        },
        {
          name: "CSE Cyber Security",
          colleges: ["Yenepoya",
            "Jain University",
            "Presidency University",
            "SRM Main Campus",
            "S-VYASA",
            "RR Institution",
            "Akash College",
            "Hindhusthan College"
          ],
        },
        {
          name: "CS Engineering in Big Data",
          colleges: ["Presidency University",
            "SRM Main Campus",
          ],
        },
        {
          name: "AI & Data Science Engineering",
          colleges: ["SEA College",
            "Kumaraguru College",
            "Hindhusthan College",
            "JCT College",
          ],
        },
        {
          name: "CSE Internet Of Things",
          colleges: ["Jain University", "Presidency University", "RR Institution"],
        },
        {
          name: "IoT & Cyber Security Engineering",
          colleges: ["SEA College",
            "East Point College", "RR Institution",
          ],
        },
        {
          name: "AI & Robotics Engineering",
          colleges: ["Acharya", "Presidency University"],
        },
        {
          name: "CSE AI&Data Science",
          colleges: ["Akash College", "Presidency College", "SEA COLLEGE", "KUMARAGURU COLLEGE",],
        },
        {
          name: "CSE Cloud Technology & Information Security",
          colleges: ["Jain University"],
        },
        {
          name: "CSE Cloud Technology & Mobial Application",
          colleges: ["Jain University"],
        },
        {
          name: "CSE Block Chain Technology",
          colleges: [
            "Jain University",
            "Presidency University",
            "SRM Main Campus",
          ],
        },
        {
          name: "CSE DevOps",
          colleges: ["Presidancy University"],
        },
        {
          name: "CSE Business System",
          colleges: [
            "Srm Main Campus",
            "JCT College",
          ],
        },
        {
          name: "CSE Cloud Computing",
          colleges: ["Srm Main Campus"],
        },
        {
          name: "CSE Gaming Technology",
          colleges: ["Srm Main Campus"],
        },
        {
          name: "Mechanical Engineering",
          colleges: [
            "Yenepoya",
            "Jain University",
            "Acharya",
            "Presidency",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "RR Institution",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Karavali College",
          ],
        },
        {
          name: "Mechatronics Engneering",
          colleges:
            [
              "Hindhusthan College",
            ],
        },
        {
          name: "Electrical & Electronics Engineering",
          colleges:
            [
              "Yenepoya",
              "RR Institution",
              "Presidency university",
              "MS Ramaiah",
              "Kumaraguru College",
              "SRM Main Campus",
              "Hindhusthan College",
              "JCT College",
            ],
        },
        {
          name: "Electronics & Communication Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "RR Institution",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "East Point College",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
          ],
        },
        {
          name: "Electronics & Instrumentation Engineering",
          colleges: [
            "Kumaraguru College",
            "Hindhusthan College",
          ],
        },
        {
          name: "Civil Engineering",
          colleges: [
            "Acharya",
            "RR Institution",
            "MS Ramaiah",
            "Presidency University",
            "SEA College",
            "East Point College",
            "Jain University",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
          ],
        },
        {
          name: "Civil Engneering With Computer Applications",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "Information Science & Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "Presidency University",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "East Point College",
            "Jain University",
            "SRM Main Campus",
          ],
        },
        {
          name: "Food Technology",
          colleges:
            [
              "Hindhusthan College",
              "JCT College",
            ],
        },
        {
          name: "Information Technology",
          colleges:
            [
              "Hindhusthan College",
            ],
        },
        {
          name: "Nano Technology",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "Aeronautical Engineering",
          colleges: ["Acharya", "Kumaraguru College", "Hindhusthan College", "Karavali College"],
        },
        {
          name: "Mechatronics Engineering",
          colleges: ["Acharya", "Kumaraguru College"],
        },
        {
          name: "Bio Technology Engineering",
          colleges: ["Acharya", "Kumaraguru College", "SRM Man Campus"],
        },
        {
          name: "Bio Medical Engneering",
          colleges: ["SRM Main Campus", "Hindhusthan College"],
        },
        {
          name: "BioTech& BioMedical Engneering",
          colleges: [
            "JCT College",
          ],
        },
        {
          name: "Electric Vehicle Technology",
          colleges: ["Acharya"],
        },
        {
          name: "Computer Science & Technology Engineering",
          colleges: ["S-VYASA", "RR Institution", "Presidency"],
        },
        {
          name: "Mathematics & Computing Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Petroleum Engineering",
          colleges: [
            "Presidency University",
            "JCT College",

          ],
        },
        {
          name: "Chemical Engneering",
          colleges: [
            "SRM Main Campus",
            "Hindhusthan College",
          ],
        },
        {
          name: "Petrochemical Technology",
          colleges: [
            "JCT College",
          ],
        },
        {
          name: "Aerospace Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Automotive Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Robotics Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Agricultural Engineering",
          colleges: ["SEA College", "Hindhusthan College"],
        },
        {
          name: "Automobile Engineering",
          colleges: ["Kumaraguru College", "SRM Main Campus", "Hindhusthan College"],
        },
        {
          name: "B.Tech Fasion Technology",
          colleges: ["Kumaraguru College"],
        },
        {
          name: "B.Tech Textile Technology",
          colleges: ["Kumaraguru College"],
        },
      ],
    },
    {
      category: "B.Sc Courses",
      addons: [
        {
          name: "B.Sc Physics",
          colleges: [
            "Acharya",
            "SRM Main Campus",
            "SEA College",
          ],
        },
        {
          name: "B.Sc Physics (Data Science)",
          colleges: [
            "Acharya"
          ],
        },
        {
          name: "B.Sc Maths",
          colleges: ["Acharya", "SEA College"],
        },
        {
          name: "B.Sc Maths (Data Science)",
          colleges: ["Acharya"],
        },
        {
          name: "B.Sc Computer Science",
          colleges: ["Acharya", "SEA College", "United Institutions"],
        },
        {
          name: "B.Sc Computer Science Data Science",
          colleges: [
            "Acharya",
          ],
        },
        {
          name: "B.Sc Computer Science Data Analytics",
          colleges: [
            "United College",
          ],
        },
        {
          name: "B.Sc Computer Science  AI,Data Science&Software Systems",
          colleges: [
            "SEA College",
            "Yenepoya"
          ],
        },
        {
          name: "B.Sc Computer Science  Cybersecurity,Data Analytics & Ethical Hacking",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Chemistry",
          colleges: [
            "SRM Main Campus",
            "SEA College",
          ],
        },
        {
          name: "B.Sc Biochemistry",
          colleges: [
            "Abbs"
          ],
        },
        {
          name: "B.Sc Artificial Intelligence, DS & Software Systems",
          colleges: [
            "Acharya"
          ],
        },
        {
          name: "B.Sc Information Technology",
          colleges: [
            "United College",
          ],
        },
        {
          name: "B.Sc (ANI, DFM, Gaming)",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc Visual Communications",
          colleges: [
            "Jain University",
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc FS",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc Psychology",
          colleges: [
            "Jain University",
            "RR College",
            "SRM Main Campus",
            "SEA College",
          ],
        },
        {
          name: "B.Sc CMBT BGBT",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc PMCS Renewable Energy",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc ID",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc Forensic Science",
          colleges: [
            "Krupanidhi",
            "RR Institution",
            "SEA College",
          ],
        },
        {
          name: "B.Sc Physical Science",
          colleges: [
            "Ramaiah"
          ],
        },
        {
          name: "B.Sc Life Science",
          colleges: [
            "Ramaiah",
            "SEA COllege",
          ],
        },
        {
          name: "B.Sc Biotechnology",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Genetics",
          colleges: [
            "Abbs"
          ],
        },
        {
          name: "B.Sc Microbiology",
          colleges: [
            "Abbs"
          ],
        },
        {
          name: "B.Sc Fashion Designing",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Physical Education and Sports",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Statistics",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Defence and Strategic Studies",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Economics",
          colleges: [
            "SRM Main Campus",
            "SEA College",
          ],
        },
        {
          name: "B.Sc Food Science & Nutrition",
          colleges: [
            "SEA College",
          ],
        },
        {
          name: "B.Sc Clinical Nutirition & Dietics",
          colleges: [
            "SEA College",
          ],
        },
        {
          name: "B.Sc Electronics",
          colleges: [
            "SEA College",
          ],
        },
        {
          name: "B.Sc Interior Design",
          colleges: [
            "United Institution",
          ],
        },
        {
          name: "B.Sc Fasion Design",
          colleges: [
            "United Institution",
          ],
        },

      ],
    },
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
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya"],
        },
        {
          name: "BBA IATA",
          colleges: ["Christian College"],
        },
        {
          name: "BBA Aviation Airport Management",
          colleges: ["Karnataka College"],
        },
        {
          name: "BBA Finance & Accounts",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Strategic Finance, Event Management",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Branding & Advertising",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Global Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Digital Business",
          colleges: ["Jain University"],
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
        {
          name: "B.COM ACCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Brindavan",
            "East West College of Management",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Acharya", "Presidency"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya"],
        },
        {
          name: "B.COM SHIPPING & LOGISTICS MANAGEMENT",
          colleges: ["East West College of Management"],
        },
        {
          name: "B.COM SAP",
          colleges: ["IZEE Business School"],
        },
        {
          name: "B.COM BANKING",
          colleges: ["Brindavan"],
        },
        {
          name: "B.COM BANKING & FINANCE",
          colleges: ["Presidency"],
        },
        {
          name: "B.COM (AVIATION, LOGISTIC & SUPPLY CHAIN)",
          colleges: ["RR Institution"],
        },
        {
          name: "B.COM IAF WITH ACCA, CORPORATE ACCOUNTING , INVESTMENT BANKING CMA",
          colleges: ["Jain University"],
        },
        {
          name: "B.COM GLOBAL PROFESSIONAL QUALIFICATION - BA , CPA , RM , LSCM , FT",
          colleges: ["Jain University"],
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
            "Akash",
            "Christ University",
            "Christian Institution",
            "East Point",
            "Harsha",
            "Hillside Institution",
            "Koshys Institution",
            "MVM College",
            "PES College",
            "Presidency University",
            "Ramaiah",
            "SEA College",
            "United International",
            "SRM Main Campus",
            "JCT College",
            "Srinivas",
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["Acharya", "HKBK", "Presidency University", "Koshys Institution", "SRM Main Campus"],
        },
        {
          name: "BCA Data Science & Ethical Hacking",
          colleges: ["SEA College"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["Acharya", "HKBK", "Koshys Institution"],
        },
        {
          name: "BCA AI And ML",
          colleges: ["IZEE Business School", "Koshys Institution", "Brindavan", "HKBK", "Presidency University", "Akash College", "SEA College"],
        },
        {
          name: "BCA AI",
          colleges: ["Jain University", "HKBK"],
        },
        {
          name: "BCA AI, ML & Robotics",
          colleges: ["East West", "S-Vyasa", "United International", "Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Python",
          colleges: ["T-John", "Kripanidhi"],
        },
        {
          name: "BCA Cyber Security",
          colleges: ["HKBK"],
        },
        {
          name: "BCA ETHICAL HACKING",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Cloud Computing & Ethical Hacking",
          colleges: ["East West", "IZEE Business School"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensic",
          colleges: ["Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA Global",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BCA Robotics, AI And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cloud Computing, Ethical Hacking & Cyber Security",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan", "Yenepoya"],
        },
        {
          name: "BCA AI, Cloud Computing & DevOps",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, ML, Robotics & IOT",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Metaverse, Blockchain Technology And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Robotics",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Big Data Analytics",
          colleges: ["Krupanidhi"],
        },
        {
          name: "BCA Cybersecurity And Ethical Hacking",
          colleges: ["Krupanidhi"],
        },
        {
          name: "BCA AWS Cloud Practitioner",
          colleges: ["Krupanidhi"],
        },
        {
          name: "BCA Data Analytics",
          colleges: ["HKBK", "Jain University", "Ramaiah"],
        },
        {
          name: "BCA Cloud Computing & Digital Marketing",
          colleges: ["RR Institution", "Christian College"],
        },
        {
          name: "BCA AI, ML & Full Stack Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Cyber Security And Block Chain Technique",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Data Analytics, Data Science & Advanced Python Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Cloud, Artificial Intelligence & Data Analytics",
          colleges: ["Srinivas University", "Yenepoya"],
        },
        {
          name: "BCA Robotic Automation, Artificial Intelligence & Deep Learning",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cybersecurity, Ethical Hacking & Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, ML & Cloud Computing",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, DevOps & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA IOT, & Block Chain",
          colleges: ["United International"],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya", "Abbs"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BCA Cyber Security, Ethical Hacking & Digital Forensic",
          colleges: ["S-Vyasa", "Yenepoya"],
        },
        {
          name: "BCA Data Science, AI & Big Data Analytics",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI & Robotics",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Data Science And Software Systems",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya", "Akash"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA  Cloud Computing AI & DevOps",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA Data Science & AI",
          colleges: ["Yenepoya", "Karnataka College", "Akash", "United International", "Krupanidhi", "JCT College"],
        },

        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya", "SEA College", "Christian College", "Abbs", "Christian Institute", "United International"],
        },
        {
          name: "BCA IT For Healthcare",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI With Futurense",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Electives With Comptia",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Specialization (CT & IS, MA & CT, MA & IS With Comptia)",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Full Stack Development",
          colleges: ["Koshys Institution"],
        },
        {
          name: "BCA Full Stack with Cloud Computing & AI",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Gaming Development",
          colleges: ["Koshys Institution"],
        },
        {
          name: "BCA System Administration",
          colleges: ["PES College"],
        },
        {
          name: "BCA Application Design",
          colleges: ["PES College"],
        },
        {
          name: "BCA Software Testing",
          colleges: ["PES College"],
        },
        {
          name: "BCA Animation Adobe",
          colleges: ["United International"],
        },
        {
          name: "BCA Augumented Reality , AI & Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Robotics, AI & Virtual Reality",
          colleges: ["Srinivas University"],
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
            "Abbs",
            "Akash College",
            "Harsha Institutions",
            "Hillside Institutions",
            "Koshys College", "East Point",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Acharya", "Presidency", "Jain University", "Brindavan", "Abbs", "IZEE Business School", "United Business School"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Acharya", "Presidency", "United Business School", "SRM Main Campus"],
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
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School"
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk", "Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College", "JCT College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya"],
        },
        {
          name: "BBA IATA",
          colleges: ["Christian College"],
        },
        {
          name: "BBA Aviation Airport Management",
          colleges: ["Karnataka College"],
        },
        {
          name: "BBA Finance & Accounts",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Strategic Finance, Event Management",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Branding & Advertising",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Global Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Digital Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Logistics & Supply Chain Management",
          colleges: ["Akash College", "IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School", "United Business School"],
        },
        {
          name: "BBA Supply chain management",
          colleges: ["Hkbk"],
        },
        {
          name: "BBA Digital&Social media Marketing",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA Entrepreneurship",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA HR Analytics",
          colleges: ["United Business School"],
        },
        {
          name: "BBA Business Administration",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "BBA Retail Management",
          colleges: ["United Coimbatore"],
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
        {
          name: "B.COM ACCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Brindavan",
            "East West College of Management",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Acharya", "Presidency"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya"],
        },
        {
          name: "B.COM SHIPPING & LOGISTICS MANAGEMENT",
          colleges: ["East West College of Management"],
        },
        {
          name: "B.COM SAP",
          colleges: ["IZEE Business School"],
        },
        {
          name: "B.COM BANKING",
          colleges: ["Brindavan"],
        },
        {
          name: "B.COM BANKING & FINANCE",
          colleges: ["Presidency"],
        },
        {
          name: "B.COM (AVIATION, LOGISTIC & SUPPLY CHAIN)",
          colleges: ["RR Institution"],
        },
        {
          name: "B.COM IAF WITH ACCA, CORPORATE ACCOUNTING , INVESTMENT BANKING CMA",
          colleges: ["Jain University"],
        },
        {
          name: "B.COM GLOBAL PROFESSIONAL QUALIFICATION - BA , CPA , RM , LSCM , FT",
          colleges: ["Jain University"],
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
        {
          name: "BCA AI And ML",
          colleges: ["IZEE Business School", "Brindavan", "HKBK", "Presidency"],
        },
        {
          name: "BCA AI",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI, ML & Robotics",
          colleges: ["East West", "S-Vyasa"],
        },
        {
          name: "BCA Artificial Intelligence & Python",
          colleges: ["T-John", "Kripanidhi"],
        },
        {
          name: "BCA Cyber Security",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Cloud Computing & Ethical Hacking",
          colleges: ["East West", "IZEE Business School"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensic",
          colleges: ["Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA Global",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BCA Robotics, AI And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cloud Computing, Ethical Hacking & Cyber Security",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, Cloud Computing & DevOps",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, ML, Robotics & IOT",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Metaverse, Blockchain Technology And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Robotics",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Big Data Analytics",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA Cybersecurity And Ethical Hacking",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA AWS Cloud Practitioner",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA Data Analytics",
          colleges: ["HKBK", "Jain University"],
        },
        {
          name: "BCA Cloud Computing & Digital Marketing",
          colleges: ["RR Institution", "Christian College"],
        },
        {
          name: "BCA AI, ML & Full Stack Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Cyber Security And Block Chain Technique",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Data Analytics, Data Science & Advanced Python Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA AWS Cloud, Artificial Intelligence & Data Analytics",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Digital Marketing With Cloud Computing",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Robotic Automation, Artificial Intelligence & Deep Learning",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cybersecurity, Ethical Hacking & Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, ML & Cloud Computing",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, DevOps & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BCA Cyber Security, Ethical Hacking & Digital Forensic",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Data Science, AI & Big Data Analytics",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Data Science And Software Systems",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA Data Science & Artificial Intelligence",
          colleges: ["Yenepoya", "Karnataka College"],
        },
        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA IT For Healthcare",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI With Futurense",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Electives With Comptia",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Specialization (CT & IS, MA & CT, MA & IS With Comptia)",
          colleges: ["Jain University"],
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
      category: "BA",
      addons: [
        { name: "BA", colleges: ["KRUPANIDHI", "RAMAIAH"] },
        { name: "BA (Criminology)", colleges: ["ACHARYA", "SEA COLLEGE"] },
        { name: "BA (Psychology)", colleges: ["ACHARYA", "PRESIDENCY", "ABBS"] },
        { name: "BA (English)", colleges: ["ACHARYA", "SRM KTR"] },
        { name: "BA (History)", colleges: ["SEA COLLEGE"] },
        { name: "BA (Journalism)", colleges: ["ACHARYA", "SEA COLLEGE"] },
        { name: "BA (Animation)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Graphic Design)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Visual Effects)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Fashion Design)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Sports Studies)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Journalism and Mass Communication)", colleges: ["PRESIDENCY UNIVERSITY", "SRM KTR"] },
        { name: "BA (Sociology)", colleges: ["ABBS"] },
        { name: "BA (Political Science)", colleges: ["ABBS", "SEA COLLEGE"] },
        { name: "BA CPJ (Criminology, Psychology & Journalism)", colleges: ["Koshys College"] },
        { name: "BA (Tourism)", colleges: ["SEA COLLEGE"] }
      ]
    },
    {
      category: "BSW",
      addons: [
        { name: "BSW", colleges: ["SEA College", "ACHARYA"] }
      ]
    },
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
            "Abbs",
            "Akash College",
            "Harsha Institutions",
            "Hillside Institutions",
            "Koshys College", "East Point",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Acharya", "Presidency", "Jain University", "Brindavan", "Abbs", "IZEE Business School", "United Business School"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Acharya", "Presidency", "United Business School", "SRM Main Campus"],
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
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School"
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk", "Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College", "JCT College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya"],
        },
        {
          name: "BBA IATA",
          colleges: ["Christian College"],
        },
        {
          name: "BBA Aviation Airport Management",
          colleges: ["Karnataka College"],
        },
        {
          name: "BBA Finance & Accounts",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Strategic Finance, Event Management",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Branding & Advertising",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Global Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Digital Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Logistics & Supply Chain Management",
          colleges: ["Akash College", "IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School", "United Business School"],
        },
        {
          name: "BBA Supply chain management",
          colleges: ["Hkbk"],
        },
        {
          name: "BBA Digital&Social media Marketing",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA Entrepreneurship",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA HR Analytics",
          colleges: ["United Business School"],
        },
        {
          name: "BBA Business Administration",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "BBA Retail Management",
          colleges: ["United Coimbatore"],
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
      "B.Sc Data Science",
      "B.Sc Radiotherapy Technology",
      "B.Sc Emergency Medicine",
      "B.Sc Medical Laboratory Technology",
      "B.Sc Optometry",
      "B.Sc Neuroscience",
      "B.Sc Perfusion Technology",
      "B.Sc Respiratory Therapy",
      "B.Sc Renal Dialysis Technology",
      "B.Sc Intensive Care Technology and Medical Instrumentation",
      "B.Sc Nutrition & Dietetics",
      "B.Sc Nuclear Medicine Technology",
      "B.Sc Cardiovascular Technology",
      "B.Sc Renal Replacement Therapy & Dialysis Technology",
      "B.Sc Radiotherapy Technology",
      "B.Sc Emergency Trauma Care",
      "B.Sc Physician Associate",
      "Bachelor in Naturopathy & Yogic Science",
      "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
      "Bachelor of Homeopathic Medicine & Surgery (BHMS)",
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Computer Science",
      "M.Sc Data Science",
      "MCA (Master of Computer Applications)",
      "Diploma in Medical Laboratory Technology (DMLT)",
      "Diploma in Radiology",
      "Diploma in Nuclear Medicine Technology",
      "Diploma in Cardio Vascular Technology",
      "Diploma in Imaging Technology",
      "Diploma in Hospital Administration",
      "Diploma in Emergency Trauma Care",
      "Diploma in Dietetics & Nutrition",
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
      "B.A Journalism & Mass Communication",
      "B.A Criminology",
      "B.A Art History",
      "B.A Public Administration",
      "B.A Anthropology",
      "B.A Linguistics",
      "B.A International Relations",
      "B.A Social Work",
      "B.A Counseling Psychology",
      "M.A Counseling Psychology",
      "M.A Economics",
      "Diploma in Public Administration",
      "Diploma in International Relations"
    ],


    commerce: [
      "B.Com (Bachelor of Commerce)",
      "BBA (Bachelor of Business Administration)",
      "BMS (Bachelor of Management Studies)",
      "B.Com Banking & Finance",
      "B.Com International Accounting",
      "B.Com Logistics",
      "B.Com Shipping & Logistics Management",
      "B.Com Accounting and Finance",
      "B.Com E-Commerce",
      "B.Com Investment Banking",
      "B.Com Marketing Management",
      "BBA General",
      "BBA Aviation",
      "BBA Logistics and Supply Chain Management",
      "BBA Business Analytics",
      "BBA Finance",
      "BBA Human Resource Management",
      "BBA Marketing",
      "BBA Digital Marketing",
      "BBA Tourism & Travel Management",
      "BMS Financial Services",
      "BMS Tourism & Hospitality Management",
      "BMS Aviation Management",
      "BMS International Business",
      "BMS Event Management",
      "BMS Marketing Management",
      "M.Com (Master of Commerce)",
      "M.Com General",
      "M.Com Accounting and Finance",
      "M.Com Banking and Insurance",
      "M.Com Taxation",
      "M.Com International Business",
      "M.Com Business Analytics",
      "MBA (Master of Business Administration)",
      "MBA General",
      "MBA Marketing Management",
      "MBA Finance Management",
      "MBA Human Resource Management",
      "MBA Operations Management",
      "MBA International Business",
      "MBA Supply Chain Management",
      "MBA Digital Marketing",
      "MBA Event Management",
      "Diploma in Financial Accounting",
      "Diploma in Business Management",
      "Diploma in Banking & Finance",
      "Diploma in Taxation",
      "Diploma in Marketing Management",
      "Diploma in Entrepreneurship",
      "Diploma in Import & Export Management"
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
    "S-VYASA": "Bengaluru",
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
    "Koshys College": "Bengaluru",
    "Koshys Institution": "Bengaluru",
    "JSS College": "Mysore",
    "Adichunchanagiri College": "Mysore",
    "BGS Apollo": "Mysore",
    "Cauvery College": "Mysore",
    "Gopala Gawda College": "Mysore",
    "Vikram College": "Mysore",
    "St.Joseph College": "Mysore",
    "Vidya Vikas College": "Mysore",
    "St.Alphonsa College": "Mysore",
    "Sigma College": "Mysore",
    "Heritage City College": "Mysore",
    "Suyog College": "Mysore",
    "Vishwa Bharathi College": "Mysore",
    "Mother Teresa College": "Mysore",
    "Smt.Padma G Madegowda College": "Mysore",
    "Manipal University": "Bengaluru",
    "SRM Main Campus": "Chennai"
  };

  const dotzeeChoiceColleges = [
    "JAIN UNIVERSITY",
    "YENEPOYA",
    "MS RAMAIAH",
    "ACHARYA",
    "PRESIDENCY",
    "KRUPANIDHI",
    "SRM Main Campus",
    "Manipal University"
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
