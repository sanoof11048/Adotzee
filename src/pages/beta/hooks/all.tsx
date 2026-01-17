// // ./Context/CourseFinderContext.tsx
// import { createContext, useContext, useState } from "react";
// import { apiService } from "../../../Admin/services/api";

// interface Selection {
//   type: string;
//   stream: string;
//   course: any | null;
//   addon: any | null;
// }

// interface CourseFinderContextType {
//   selection: Selection;
//   setType: (type: string) => void;
//   setStream: (stream: string) => void;
//   selectCourse: (course: any) => void;
//   selectAddon: (addon: any) => void;
//   types: string[];
//   streams: string[];
//   courses: any[];
//   addons: any[];
//   colleges: any[];
//   loading: boolean;
// }

// const CourseFinderContext = createContext<CourseFinderContextType | undefined>(
//   undefined
// );

// export const CourseFinderProvider = ({ children }: { children: React.ReactNode }) => {
//   const [selection, setSelection] = useState<Selection>({
//     type: "",
//     stream: "",
//     course: null,
//     addon: null,
//   });

//   const [courses, setCourses] = useState<any[]>([]);
//   const [addons, setAddons] = useState<any[]>([]);
//   const [colleges, setColleges] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const types = ["UG", "PG"];
//   const streams = ["Science", "Commerce", "Humanities"];

//   // Simple cache
//   const cache: Record<string, any> = {};

//   const handleApi = async (key: string, fn: () => Promise<any>, setter: (data: any) => void) => {
//     setLoading(true);
//     try {
//       if (cache[key]) {
//         setter(cache[key]);
//       } else {
//         const res = await fn();
//         cache[key] = res.data.data;
//         setter(res.data.data);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const setType = (type: string) => {
//     setSelection({ type, stream: "", course: null, addon: null });
//     setCourses([]);
//     setAddons([]);
//     setColleges([]);
//   };

//   const setStream = (stream: string) => {
//     setSelection((prev) => ({ ...prev, stream }));
//     handleApi(`courses-${selection.type}-${stream}`, () =>
//       apiService.filterCourses(selection.type, stream), 
//       setCourses
//     );
//   };

//   const selectCourse = (course: any) => {
//     setSelection((prev) => ({ ...prev, course }));
//     handleApi(`addons-${course.id}`, () => apiService.getAddonsByCourse(course.id), setAddons);
//   };

//   const selectAddon = (addon: any) => {
//     setSelection((prev) => ({ ...prev, addon }));
//     handleApi(`colleges-${addon.id}`, () => apiService.getCollegesByAddon(addon.id), setColleges);
//   };

//   return (
//     <CourseFinderContext.Provider
//       value={{
//         selection,
//         setType,
//         setStream,
//         selectCourse,
//         selectAddon,
//         types,
//         streams,
//         courses,
//         addons,
//         colleges,
//         loading,
//       }}
//     >
//       {children}
//     </CourseFinderContext.Provider>
//   );
// };

// export const useCourseFinderContext = () => {
//   const context = useContext(CourseFinderContext);
//   if (!context) throw new Error("useCourseFinderContext must be used within a CourseFinderProvider");
//   return context;
// };



// import { useNavigate } from "react-router-dom";
// import { toSlug } from "../../../utils/slug";
// import { useCourseFinderContext } from "../hooks/CourseFinderContext";

// const AddonPage = () => {
//   const navigate = useNavigate();
//   const { addons, loading, selectAddon } = useCourseFinderContext();

  
//   return (
//     <>
    
//       <h1 className="text-2xl font-bold mb-6">Select Addon</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="space-y-4">
//           {addons.map((addon) => (
//             <div
//               key={addon.id}
//               onClick={() => {
//                 selectAddon(addon); // save in context
//                 navigate(`${toSlug(addon.name)}/colleges`); // relative path
//               }}
//               className="p-5 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
//             >
//               <h2 className="font-semibold">{addon.name}</h2>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default AddonPage;



// import { useEffect, useState } from "react";
// import { Skeleton } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGraduationCap,
//   faLocationDot,
//   faStar,
//   faInfoCircle,
//   faMapLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
// import { useCourseFinderContext } from "../hooks/CourseFinderContext";
// import Footer from "../../../components/common/Footer";
// import { College } from "../../../types";

// // ------------------ College Card ------------------
// const CollegeCard = ({ college }: { college: College }) => {
//   const hasLocation =
//   college.googleMapsUrl ||
//   (college.latitude !== null &&
//    college.latitude !== undefined &&
//    college.longitude !== null &&
//    college.longitude !== undefined);


//   const openGoogleMaps = () => {
//     if (college.googleMapsUrl) {
//       window.open(college.googleMapsUrl, "_blank");
//     } else if (college.latitude != null && college.longitude != null) {
//       window.open(
//         `https://www.google.com/maps/search/?api=1&query=${college.latitude},${college.longitude}`,
//         "_blank"
//       );
//     }
//   };

//   return (
//     <div className="relative bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition">
//       {/* Badge */}
//       {college.isRecommended && (
//         <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-500 to-amber-500 px-3 py-1 rounded-lg flex items-center gap-1 text-white text-xs font-bold shadow">
//           <FontAwesomeIcon icon={faStar} />
//           Adotzee's Choice
//         </div>
//       )}

//       <div className="flex flex-col border-8 border-blue-600
//  gap-4 md:flex-row md:items-center md:justify-between">
//         {/* Left Info */}
//         <div className="flex items-start gap-4">
//           <div className="w-12 h-12 min-w-[48px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white">
//             <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg text-gray-900 leading-tight">
//               {college.name}
//             </h3>

//             <div className="flex items-center text-gray-500 text-sm mt-0">
//               <FontAwesomeIcon
//                 icon={faLocationDot}
//                 className="mr-2 text-blue-500"
//               />
//               <span className="line-clamp-1">{college.address}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Actions */}
//         <div
//           className={`flex flex-col gap-2 w-full md:w-auto ${
//             hasLocation ? "md:justify-between" : "md:justify-center"
//           }`}
//         >
//           {hasLocation && (
//             <button
//               onClick={openGoogleMaps}
//               className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium hover:bg-blue-200 transition"
//             >
//               <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
//               Open in Maps
//             </button>
//           )}

//           <a
//             href={`https://wa.me/918281060462?text=${encodeURIComponent(
//               `I need to know about ${college.name}`
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
//           >
//             <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
//             Fees & Details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ------------------ Main Page ------------------
// const CollegePage = () => {
//   const [visibleColleges, setVisibleColleges] = useState(6);
//   const { colleges, loading } = useCourseFinderContext();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 200 &&
//         visibleColleges < colleges.length &&
//         !loading
//       ) {
//         setVisibleColleges((prev) => prev + 4);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [visibleColleges, colleges.length, loading]);

//   return (
//     <>
   

//       <div className="min-h-screen bg-linear-to-br from-[#f4f7fa] to-[#e4e9f2] pt-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
//             Available Colleges
//           </h1>

//           <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6">
//             {loading ? (
//               <div className="space-y-4">
//                 {[...Array(6)].map((_, idx) => (
//                   <Skeleton
//                     key={idx}
//                     variant="rounded"
//                     width="100%"
//                     height={140}
//                     animation="wave"
//                     sx={{ bgcolor: "rgba(200,200,200,0.3)" }}
//                   />
//                 ))}
//               </div>
//             ) : colleges.length === 0 ? (
//               <p className="text-center text-gray-600 text-lg py-12">
//                 No colleges found.
//               </p>
//             ) : (
//               <div className="grid gap-5 md:grid-cols-2">
//                 {colleges.slice(0, visibleColleges).map((college) => (
//                   <CollegeCard key={college.id} college={college} />
//                 ))}
//               </div>
//             )}

//             {!loading && visibleColleges < colleges.length && (
//               <p className="text-center text-gray-500 mt-6">
//                 Loading more colleges...
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default CollegePage;




// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toSlug } from "../../../utils/slug";
// import { useCourseFinderContext } from "../hooks/CourseFinderContext";

// const CoursePage = () => {
//   const { type, stream } = useParams();
//   const navigate = useNavigate();
//   const { courses, loading, setStream, selectCourse } = useCourseFinderContext();

// useEffect(() => {
//   if (!type || !stream) {
//     navigate("/explore", { replace: true });
//     return;
//   }

//   setStream(stream);
// }, [type, stream]);


//   return (
//     <>
    
//       <h1 className="text-2xl font-bold mb-6">Select Course</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="space-y-4">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               onClick={() => {
//                 selectCourse(course); // save in context
//                 navigate(`${toSlug(course.name)}`); // relative path
//               }}
//               className="p-5 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
//             >
//               <h2 className="font-semibold">{course.name}</h2>
//               <p className="text-gray-500">{course.duration}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default CoursePage;




// import { useCourseFinderContext } from "../hooks/CourseFinderContext";
// import { useNavigate, useParams } from "react-router-dom";

// const StreamPage = () => {
//   const { streams, setStream } = useCourseFinderContext();
//   const navigate = useNavigate();

//   return (
//     <>
    
//       <h1 className="text-2xl font-bold mb-6">Select Stream</h1>

//       <div className="grid grid-cols-2 gap-6">
//         {streams.map((stream) => (
//           <div
//             key={stream}
//             onClick={() => {
//               setStream(stream); // context caches courses
//               navigate(`${stream.toLowerCase()}`); // relative path
//             }}
//             className="p-6 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
//           >
//             <h2 className="text-xl font-semibold">{stream}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default StreamPage;



// import { useEffect } from "react";
// import { useCourseFinderContext } from "../hooks/CourseFinderContext";
// import { useNavigate } from "react-router-dom";

// const TypePage = () => {
//   const { types, setType } = useCourseFinderContext();
//   const navigate = useNavigate();

//   return (
//     <>
    
//       <h1 className="text-2xl font-bold mb-6">Select Course Type</h1>

//       <div className="grid grid-cols-2 gap-6">
//         {types.map((type) => (
//           <div
//             key={type}
//             onClick={() => {
//               setType(type); // save in context
//               navigate(type.toLowerCase()); // relative path
//             }}
//             className="p-6 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
//           >
//             <h2 className="text-xl font-semibold">{type}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default TypePage;


// // ./pages/beta/ExploreLayout.tsx
// import { Outlet } from "react-router-dom";
// import StepHeader from "./components/StepHeader";
// import BreadcrumbNav from "./components/BreadcrumbNav";
// import Navbar from "../../components/common/Navbar";
// import Back from "../../components/common/Back";

// const ExploreLayout = () => {
//   return (<>
//     <Back />
//     <Navbar />

//     <div className="flex">
//       <div className="flex-1 p-4">

//         <StepHeader />

//         {/* Breadcrumb navigation */}
//         <BreadcrumbNav />

//         {/* Nested route content */}
//         <div className="mt-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   </>
//   );
// };

// export default ExploreLayout;



// // ./pages/beta/components/BreadcrumbNav.tsx
// import { useNavigate } from "react-router-dom";
// import { useCourseFinderContext } from "../hooks/CourseFinderContext";

// // Helper to format labels nicely
// const formatLabel = (text: string) => {
//   if (!text) return "";
//   return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// };

// const BreadcrumbNav = () => {
//   const navigate = useNavigate();
//   const { selection } = useCourseFinderContext();

//   // Build breadcrumb steps based on current selection
//   const segments = [
//     { label: "Home", path: "/" },
//     selection.type && { label: selection.type, path: `/explore/${selection.type}` },
//     selection.stream && { label: selection.stream, path: `/explore/${selection.type}/${selection.stream}` },
//     selection.course && { label: selection.course.name, path: `/explore/${selection.type}/${selection.stream}/${selection.course.name}` },
//     selection.addon && { label: selection.addon.name, path: `/explore/${selection.type}/${selection.stream}/${selection.course.name}/${selection.addon.name}/colleges` },
//   ].filter(Boolean); // remove falsy values

//   return (
//     <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm overflow-x-auto">
//         {segments.map((seg, index) => (
//           <div key={index} className="flex items-center gap-2 whitespace-nowrap">
//             {index !== 0 && <span className="text-gray-400">›</span>}
//             <span
//               onClick={() => navigate(seg.path)}
//               className="cursor-pointer text-blue-600 hover:underline"
//             >
//               {formatLabel(seg.label)}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BreadcrumbNav;

// const StepHeader = () => {
//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-2">Find Your Perfect Course</h1>
//       <p className="text-gray-600 mb-6">
//         Navigate through course types, streams, and specializations.
//       </p>
//     </>
//   );
// };

// export default StepHeader;



// <Route path="/explore/*" element={<ExploreLayout />}>
//                   <Route index element={<TypePage />} />
//                   <Route path=":type" element={<StreamPage />} />
//                   <Route path=":type/:stream" element={<CoursePage />} />
//                   <Route path=":type/:stream/:course" element={<AddonPage />} />
//                   <Route path=":type/:stream/:course/:addon/colleges" element={<CollegePage />} />
//                 </Route>
