import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLocationDot, faStar, faInfoCircle, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";
import Footer from "../../../components/common/Footer";
import { College } from "../../../types";

const CollegeCard = ({ college }: { college: College }) => {
  const hasLocation =
    college.googleMapsUrl ||
    (college.latitude != null && college.longitude != null);

  const openGoogleMaps = () => {
    if (college.googleMapsUrl) window.open(college.googleMapsUrl, "_blank");
    else if (college.latitude && college.longitude)
      window.open(`https://www.google.com/maps/search/?api=1&query=${college.latitude},${college.longitude}`, "_blank");
  };

  return (
    <div className="relative bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition">
      {college.isRecommended && (
        <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-500 to-amber-500 px-3 py-1 rounded-lg flex items-center gap-1 text-white text-xs font-bold shadow">
          <FontAwesomeIcon icon={faStar} /> Adotzee's Choice
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-2 border-blue-600 p-2">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 min-w-[48px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white">
            <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 leading-tight">{college.name}</h3>
            <div className="flex items-center text-gray-500 text-sm mt-0">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-blue-500" />
              <span className="line-clamp-1">{college.address}</span>
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-2 w-full md:w-auto ${hasLocation ? "md:justify-between" : "md:justify-center"}`}>
          {hasLocation && (
            <button
              onClick={openGoogleMaps}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium hover:bg-blue-200 transition"
            >
              <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" /> Open in Maps
            </button>
          )}

          <a
            href={`https://wa.me/918281060462?text=${encodeURIComponent(`I need to know about ${college.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Fees & Details
          </a>
        </div>
      </div>
    </div>
  );
};

const CollegePage = () => {
  const [visibleColleges, setVisibleColleges] = useState(6);
  const { colleges, loading, selection } = useCourseFinderContext();

  if (!selection.addon) return null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200 && visibleColleges < colleges.length && !loading)
        setVisibleColleges((prev) => prev + 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleColleges, colleges.length, loading]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-[#f4f7fa] to-[#e4e9f2] pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Available Colleges</h1>
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6">
            {loading ? (
              <div className="space-y-4">
                {[...Array(6)].map((_, idx) => (
                  <Skeleton key={idx} variant="rounded" width="100%" height={140} animation="wave" sx={{ bgcolor: "rgba(200,200,200,0.3)" }} />
                ))}
              </div>
            ) : colleges.length === 0 ? (
              <p className="text-center text-gray-600 text-lg py-12">No colleges found.</p>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {colleges.slice(0, visibleColleges).map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            )}
            {!loading && visibleColleges < colleges.length && <p className="text-center text-gray-500 mt-6">Loading more colleges...</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegePage;
