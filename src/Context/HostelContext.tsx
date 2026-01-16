// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
// } from "react";

// /* ---------- Types ---------- */

// export interface College {
//   id: number;
//   name: string;
//   location: string;
//   city: string;
//   type: string;
// }

// export interface Property {
//   id: number;
//   collegeId: number;
//   name: string;
//   type: "PG" | "Hostel";
//   price: number;
//   location: string;
//   distance: string;
//   amenities: string[];
//   images: string[];
//   description: string;
//   rating: string;
//   totalRooms: number;
//   availableRooms: number;
//   contactNumber: string;
//   ownerName: string;
//   featured: boolean;
//   verified: boolean;
// }

// export interface Booking {
//   id: number;
//   createdAt: string;
//   status: "pending" | "confirmed" | "cancelled";
// }

// export interface BookingInput {
//   propertyId: number;
//   userName: string;
//   phone: string;
// }

// interface HostelContextType {
//   colleges: College[];
//   properties: Property[];
//   bookings: Booking[];
//   favorites: number[];
//   getCollegeById: (collegeId: string | number) => College | undefined;
//   getPropertiesByCollegeId: (collegeId: string | number) => Property[];
//   getPropertyById: (propertyId: string | number) => Property | undefined;
//   createBooking: (bookingData: BookingInput) => Booking;
//   toggleFavorite: (propertyId: number) => void;
// }

// interface HostelProviderProps {
//   children: ReactNode;
// }

// /* ---------- Context ---------- */

// const HostelContext = createContext<HostelContextType | undefined>(undefined);

// export const useHostel = (): HostelContextType => {
//   const context = useContext(HostelContext);
//   if (!context) {
//     throw new Error("useHostel must be used within a HostelProvider");
//   }
//   return context;
// };

// /* ---------- Provider ---------- */

// export const HostelProvider: React.FC<HostelProviderProps> = ({ children }) => {
//   /* ---------- Colleges ---------- */

//   const colleges: College[] = [
//     { id: 1, name: "ABC Engineering College", location: "Bangalore", city: "Bangalore", type: "Engineering" },
//     { id: 2, name: "XYZ Arts & Science College", location: "Bangalore", city: "Bangalore", type: "Arts & Science" },
//     { id: 3, name: "PQR Commerce College", location: "Bangalore", city: "Bangalore", type: "Commerce" },
//     { id: 4, name: "Bangalore Institute of Technology", location: "Bangalore", city: "Bangalore", type: "Engineering" },
//     { id: 5, name: "St. Joseph's College", location: "Bangalore", city: "Bangalore", type: "Arts & Science" },
//     { id: 6, name: "Christ University", location: "Bangalore", city: "Bangalore", type: "University" },
//     { id: 7, name: "PES University", location: "Bangalore", city: "Bangalore", type: "Engineering" },
//     { id: 8, name: "Mount Carmel College", location: "Bangalore", city: "Bangalore", type: "Arts & Science" },

//     ...Array.from({ length: 60 }, (_, i): College => ({
//       id: 9 + i,
//       name: `${[
//         "Rajiv Gandhi",
//         "APJ Abdul Kalam",
//         "Mahatma Gandhi",
//         "Jawaharlal Nehru",
//         "Indira Gandhi",
//         "Sardar Patel",
//         "Dr. BR Ambedkar",
//         "Subhash Chandra Bose",
//       ][i % 8]} ${
//         [
//           "Institute of Technology",
//           "College of Engineering",
//           "University",
//           "College of Arts & Science",
//           "Medical College",
//           "Business School",
//         ][i % 6]
//       }`,
//       location: [
//         "Ahmedabad",
//         "Jaipur",
//         "Lucknow",
//         "Chandigarh",
//         "Bhopal",
//         "Thiruvananthapuram",
//         "Guwahati",
//         "Bhubaneswar",
//         "Patna",
//         "Ranchi",
//       ][i % 10],
//       city: [
//         "Ahmedabad",
//         "Jaipur",
//         "Lucknow",
//         "Chandigarh",
//         "Bhopal",
//         "Thiruvananthapuram",
//         "Guwahati",
//         "Bhubaneswar",
//         "Patna",
//         "Ranchi",
//       ][i % 10],
//       type: ["Engineering", "Arts & Science", "Commerce", "Medical", "Business", "University"][i % 6],
//     })),
//   ];

//   /* ---------- Utilities ---------- */

//   const shuffleArray = <T,>(array: T[]): T[] => {
//     const newArray = [...array];
//     for (let i = newArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//     }
//     return newArray;
//   };

//   const generatePropertiesForCollege = (
//     collegeId: number,
//     collegeName: string
//   ): Property[] => {
//     const propertyTypes: Array<"PG" | "Hostel"> = ["PG", "Hostel"];
//     const names = [
//       "Sunrise",
//       "Green Valley",
//       "Royal",
//       "Elite",
//       "Paradise",
//       "Golden",
//       "Silver",
//       "Diamond",
//     ];

//     return Array.from({ length: Math.floor(Math.random() * 8) + 3 }, (_, i) => {
//       const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

//       return {
//         id: collegeId * 1000 + i + 1,
//         collegeId,
//         name: `${names[Math.floor(Math.random() * names.length)]} ${type}`,
//         type,
//         price: Math.floor(Math.random() * 4000) + 2500,
//         location: `Near ${collegeName}`,
//         distance: `${(Math.random() * 2 + 0.1).toFixed(1)} km`,
//         amenities: shuffleArray([
//           "WiFi",
//           "Food",
//           "Laundry",
//           "AC",
//           "Security",
//           "Parking",
//           "Gym",
//           "Library",
//         ]).slice(0, 6),
//         images: [],
//         description: "Comfortable student accommodation with modern amenities.",
//         rating: (Math.random() * 2 + 3).toFixed(1),
//         totalRooms: Math.floor(Math.random() * 30) + 10,
//         availableRooms: Math.floor(Math.random() * 15),
//         contactNumber: "+91 9000000000",
//         ownerName: "Mr. Rajesh Kumar",
//         featured: Math.random() < 0.3,
//         verified: Math.random() < 0.8,
//       };
//     });
//   };

//   /* ---------- Data ---------- */

//   const properties: Property[] = colleges.flatMap((college) =>
//     generatePropertiesForCollege(college.id, college.name)
//   );

//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [favorites, setFavorites] = useState<number[]>([]);

//   /* ---------- Actions ---------- */

//   const getCollegeById = (collegeId: string | number) =>
//     colleges.find((c) => c.id === Number(collegeId));

//   const getPropertiesByCollegeId = (collegeId: string | number) =>
//     properties.filter((p) => p.collegeId === Number(collegeId));

//   const getPropertyById = (propertyId: string | number) =>
//     properties.find((p) => p.id === Number(propertyId));

//   const createBooking = (bookingData: BookingInput): Booking => {
//     const newBooking: Booking & BookingInput = {
//       id: Date.now(),
//       createdAt: new Date().toISOString(),
//       status: "pending",
//       ...bookingData,
//     };

//     setBookings((prev) => [...prev, newBooking]);
//     return newBooking;
//   };

//   const toggleFavorite = (propertyId: number) => {
//     setFavorites((prev) =>
//       prev.includes(propertyId)
//         ? prev.filter((id) => id !== propertyId)
//         : [...prev, propertyId]
//     );
//   };

//   /* ---------- Context Value ---------- */

//   const value: HostelContextType = {
//     colleges,
//     properties,
//     bookings,
//     favorites,
//     getCollegeById,
//     getPropertiesByCollegeId,
//     getPropertyById,
//     createBooking,
//     toggleFavorite,
//   };

//   return (
//     <HostelContext.Provider value={value}>
//       {children}
//     </HostelContext.Provider>
//   );
// };
