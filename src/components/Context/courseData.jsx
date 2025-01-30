import { createContext, useContext } from "react";

const CourseContext = createContext()

export const useCourse=()=>{
    return useContext(CourseContext)
}

export const CourseProvider =({children})=>{
    const scienceCourses = []
    const commerceCourses = []
    const humanitiesCourses = []
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
          "Diploma in Radiology"
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
          "Diploma in Psychology"
        ],
      
        commerce: [
          "B.Com (Bachelor of Commerce)",
          "BBA (Bachelor of Business Administration)",
          "BMS (Bachelor of Management Studies)",
          "B.Com Banking & Finance",
          "M.Com (Master of Commerce)",
          "MBA (Master of Business Administration)",
          "Diploma in Financial Accounting",
          "Diploma in Business Management"
        ]
      };
      
    return (
        <CourseContext.Provider value={{coursesData}}>
            {children}
        </CourseContext.Provider>
    )
}