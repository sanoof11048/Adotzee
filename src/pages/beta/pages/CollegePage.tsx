import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLocationDot,
  faStar,
  faInfoCircle,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";
import Back from "../../../components/common/Back";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import { College } from "../../../types";

// College Card Component
const CollegeCard = ({ college }: { college: College }) => {
  const openGoogleMaps = () => {
    if (college.googleMapsUrl) {
      window.open(college.googleMapsUrl, "_blank");
    } else {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${college.latitude},${college.longitude}&query_place_id=${college.placeId || ""}`,
        "_blank"
      );
    }
  };

  return (
    <div className="relative w-full bg-white rounded-xl shadow-md border p-4 transition-transform hover:scale-[1.01]">
      {college.isRecommended && (
        <div className="absolute -top-2 -left-2 bg-gradient-to-r from-yellow-500 to-amber-500 px-3 py-1 rounded-lg flex items-center gap-1 text-white text-xs font-bold shadow-md">
          <FontAwesomeIcon icon={faStar} />
          Adotzee's Choice
        </div>
      )}

      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Left: Icon & Info */}
        <div className="flex items-center flex-1">
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white mr-4">
            <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl truncate">{college.name}</h3>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-blue-500" />
              <span className="truncate">{college.address}</span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col md:justify-between mt-4 md:mt-0 md:ml-4 gap-2">
          <button
            onClick={openGoogleMaps}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium hover:bg-blue-200 transition"
          >
            <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
            Open in Maps
          </button>

          <a
            href={`https://wa.me/918281060462?text=${encodeURIComponent(
              `I need to know about ${college.name}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg transition hover:from-blue-700 hover:to-blue-800"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Fees & Details
          </a>
        </div>
      </div>
    </div>
  );
};

// Main College Page
const CollegePage = () => {
  const [visibleColleges, setVisibleColleges] = useState(6);
  const { colleges, loading } = useCourseFinderContext();

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        visibleColleges < colleges.length &&
        !loading
      ) {
        setVisibleColleges((prev) => prev + 4);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleColleges, colleges.length, loading]);

  return (
    <>
      <Back />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#f4f7fa] to-[#e4e9f2] pt-20 px-4 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
          Available Colleges
        </h1>

        <div className="w-full max-w-6xl bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-10">
          {loading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, idx) => (
                <Skeleton
                  key={idx}
                  variant="rounded"
                  width="100%"
                  height={200}
                  animation="wave"
                  sx={{ bgcolor: "rgba(200,200,200,0.3)" }}
                />
              ))}
            </div>
          ) : colleges.length === 0 ? (
            <p className="text-center text-gray-600 text-xl py-10">
              No colleges found.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {colleges.slice(0, visibleColleges).map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )}

          {!loading && visibleColleges < colleges.length && (
            <p className="text-center text-gray-500 mt-6">Loading more colleges...</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CollegePage;
