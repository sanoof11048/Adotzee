import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toSlug } from "../../../utils/slug";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";

const AddonPage = () => {
  const { type, stream, course } = useParams();
  const navigate = useNavigate();
  const { addons, loading, selectAddon } = useCourseFinderContext();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Select Addon</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {addons.map((addon) => (
            <div
              key={addon.id}
              onClick={() => {
                selectAddon(addon); // save in context
                navigate(`${toSlug(addon.name)}/colleges`); // relative path
              }}
              className="p-5 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
            >
              <h2 className="font-semibold">{addon.name}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddonPage;
