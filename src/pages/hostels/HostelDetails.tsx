// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useHostel } from "../../Context/HostelContext";
// import Navbar from "../../components/common/Navbar";
// import Footer from "../../components/common/Footer";
// import {
//   ArrowLeft,
//   BookOpen,
//   Camera,
//   Car,
//   CheckCircle,
//   Dumbbell,
//   Heart,
//   IndianRupee,
//   MapPin,
//   Phone,
//   Share2,
//   Shield,
//   Snowflake,
//   Sparkles,
//   Star,
//   User,
//   Users,
//   UtensilsCrossed,
//   Wifi,
//   X,
//   XCircle,
// } from "lucide-react";

// /* =========================
//    Types
// ========================= */

// type RoomType = "single" | "double" | "triple";

// interface BookingData {
//   studentName: string;
//   email: string;
//   phone: string;
//   fromDate: string;
//   toDate: string;
//   roomType: RoomType;
//   specialRequests: string;
// }

// const HostelDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const {
//     getPropertyById,
//     createBooking,
//     toggleFavorite,
//     favorites,
//   } = useHostel();

//   const property = id ? getPropertyById(id) : null;

//   const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
//   const [showBookingForm, setShowBookingForm] = useState<boolean>(false);
//   const [showImageModal, setShowImageModal] = useState<boolean>(false);

//   const [bookingData, setBookingData] = useState<BookingData>({
//     studentName: "",
//     email: "",
//     phone: "",
//     fromDate: "",
//     toDate: "",
//     roomType: "single",
//     specialRequests: "",
//   });

//   const isFavorite = id ? favorites.includes(Number(id)) : false;

//   /* =========================
//      Helpers
//   ========================= */

//   const getAmenityIcon = (amenity: string): React.ElementType => {
//     const iconMap: Record<string, React.ElementType> = {
//       WiFi: Wifi,
//       Food: UtensilsCrossed,
//       Parking: Car,
//       Gym: Dumbbell,
//       Security: Shield,
//       Library: BookOpen,
//       "Study Room": BookOpen,
//       AC: Snowflake,
//       "Study Area": BookOpen,
//       Laundry: Shield,
//       "Common Room": Users,
//       "Recreation Room": Users,
//     };

//     return iconMap[amenity] || Shield;
//   };

//   const calculateTotalAmount = (): number => {
//     if (!bookingData.fromDate || !bookingData.toDate) return 0;

//     const from = new Date(bookingData.fromDate);
//     const to = new Date(bookingData.toDate);

//     const diffDays = Math.ceil(
//       (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)
//     );

//     const months = Math.ceil(diffDays / 30);
//     return months * property!.price;
//   };

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setBookingData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const {
//       studentName,
//       email,
//       phone,
//       fromDate,
//       toDate,
//     } = bookingData;

//     if (!studentName || !email || !phone || !fromDate || !toDate) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     if (new Date(fromDate) >= new Date(toDate)) {
//       alert("Check-out date must be after check-in date");
//       return;
//     }

//     createBooking({
//       propertyId: property!.id,
//       propertyName: property!.name,
//       ...bookingData,
//       totalAmount: calculateTotalAmount(),
//     });

//     alert("Booking request submitted successfully!");
//     setShowBookingForm(false);

//     setBookingData({
//       studentName: "",
//       email: "",
//       phone: "",
//       fromDate: "",
//       toDate: "",
//       roomType: "single",
//       specialRequests: "",
//     });
//   };

//   /* =========================
//      Guards
//   ========================= */

//   if (!property) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-6xl mb-4">🏠</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Property not found
//           </h2>
//           <button
//             onClick={() => navigate("/hostels")}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Back to Hostels
//           </button>
//         </div>
//       </div>
//     );
//   }

//   /* =========================
//      JSX
//   ========================= */

//   return (
//     <div className="min-h-screen mt-10 bg-gray-50">
//       <Navbar />
//       {/* --- UI unchanged, logic typed --- */}
//       {/* Footer remains */}
//       <Footer />
//     </div>
//   );
// };

// export default HostelDetails;
