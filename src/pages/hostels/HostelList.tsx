// import React, { useState, useMemo } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import Navbar from "../../components/common/Navbar";
// import Footer from "../../components/common/Footer";
// import { useHostel } from "../../Context/HostelContext";
// import { Building, Filter, Search, TrendingUp } from "lucide-react";
// import PropertyCard from "./components/PropertyCard";

// /* ---------- Types ---------- */

// interface College {
//   id: string;
//   name: string;
//   city: string;
//   location: string;
//   type: string;
// }

// interface Property {
//   id: string;
//   name: string;
//   location: string;
//   price: number;
//   rating: number;
//   distance: string;
//   type: "pg" | "hostel";
// }

// interface HostelContextType {
//   colleges: College[];
//   getCollegeById: (id: string) => College | undefined;
//   getPropertiesByCollegeId: (id: string) => Property[];
// }

// /* ---------- Component ---------- */

// const HostelList: React.FC = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const { colleges, getCollegeById, getPropertiesByCollegeId } =
//     useHostel() as HostelContextType;

//   const collegeId = searchParams.get("collegeId") ?? "1";

//   const [selectedCollege, setSelectedCollege] = useState<string>(collegeId);
//   const [priceFilter, setPriceFilter] = useState<"all" | "low" | "medium" | "high">("all");
//   const [typeFilter, setTypeFilter] = useState<"all" | "pg" | "hostel">("all");
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [sortBy, setSortBy] = useState<"rating" | "price-low" | "price-high" | "distance">("rating");
//   const [showFilters, setShowFilters] = useState<boolean>(false);
//   const [collegeSearch, setCollegeSearch] = useState<string>("");
//   const [selectedCity, setSelectedCity] = useState<string>("");

//   const college = getCollegeById(selectedCollege);
//   const allProperties = getPropertiesByCollegeId(selectedCollege);

//   const cities = [...new Set(colleges.map((c) => c.city))];

//   const filteredColleges = colleges.filter(
//     (c) =>
//       c.name.toLowerCase().includes(collegeSearch.toLowerCase()) &&
//       (selectedCity === "" || c.city === selectedCity)
//   );

//   /* ---------- Filter & Sort Properties ---------- */
//   const filteredProperties = useMemo<Property[]>(() => {
//     let filtered = allProperties.filter((property) => {
//       const matchesSearch =
//         property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         property.location.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesPrice =
//         priceFilter === "all" ||
//         (priceFilter === "low" && property.price <= 3500) ||
//         (priceFilter === "medium" &&
//           property.price > 3500 &&
//           property.price <= 4500) ||
//         (priceFilter === "high" && property.price > 4500);

//       const matchesType =
//         typeFilter === "all" ||
//         property.type.toLowerCase() === typeFilter;

//       return matchesSearch && matchesPrice && matchesType;
//     });

//     filtered.sort((a, b) => {
//       switch (sortBy) {
//         case "price-low":
//           return a.price - b.price;
//         case "price-high":
//           return b.price - a.price;
//         case "distance":
//           return parseFloat(a.distance) - parseFloat(b.distance);
//         default:
//           return b.rating - a.rating;
//       }
//     });

//     return filtered;
//   }, [allProperties, searchTerm, priceFilter, typeFilter, sortBy]);

//   /* ---------- Handlers ---------- */
//   const handleCollegeChange = (newCollegeId: string): void => {
//     setSelectedCollege(newCollegeId);
//     navigate(`/hostels?collegeId=${newCollegeId}`);
//   };

//   /* ---------- JSX ---------- */
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-4">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Find Your Perfect Accommodation
//             </h1>
//             <p className="text-lg text-gray-600">
//               Discover comfortable PGs and Hostels near your college
//             </p>
//           </div>

//           {/* College Selector */}
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//             <h2 className="text-xl font-semibold mb-4">Select Your College</h2>

//             <div className="grid md:grid-cols-3 gap-4 mb-6">
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   value={collegeSearch}
//                   onChange={(e) => setCollegeSearch(e.target.value)}
//                   placeholder="Search colleges..."
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg"
//                 />
//               </div>

//               <select
//                 value={selectedCity}
//                 onChange={(e) => setSelectedCity(e.target.value)}
//                 className="px-4 py-2 border rounded-lg"
//               >
//                 <option value="">All Cities</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>

//               <div className="text-sm text-gray-600 flex items-center">
//                 <Building className="w-4 h-4 mr-1" />
//                 {filteredColleges.length} colleges found
//               </div>
//             </div>

//             <div className="grid md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
//               {filteredColleges.map((college) => (
//                 <button
//                   key={college.id}
//                   onClick={() => handleCollegeChange(college.id)}
//                   className={`p-4 border-2 rounded-lg text-left ${
//                     selectedCollege === college.id
//                       ? "border-blue-500 bg-blue-50"
//                       : "border-gray-200 hover:border-blue-300"
//                   }`}
//                 >
//                   <h3 className="font-semibold text-sm">{college.name}</h3>
//                   <p className="text-xs text-gray-600">
//                     {college.location} • {college.type}
//                   </p>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Results */}
//           {college && (
//             <div className="mb-6 flex justify-between items-center">
//               <div>
//                 <h2 className="text-2xl font-bold">
//                   Accommodations near {college.name}
//                 </h2>
//                 <p className="text-gray-600">
//                   {filteredProperties.length} properties found in{" "}
//                   {college.location}
//                 </p>
//               </div>
//               <TrendingUp className="w-4 h-4 text-gray-500" />
//             </div>
//           )}

//           <div className="grid md:grid-cols-3 gap-6">
//             {filteredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>

//           {filteredProperties.length === 0 && (
//             <div className="text-center py-16">
//               <h3 className="text-xl font-semibold text-gray-600">
//                 No properties found
//               </h3>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default HostelList;
