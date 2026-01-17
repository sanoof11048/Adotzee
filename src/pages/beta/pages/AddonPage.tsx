import { useCourseFinderContext } from "../hooks/CourseFinderContext";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../../../utils/slug";

const AddonPage = () => {
  const navigate = useNavigate();
  const { selection, addons, loading, selectAddon } = useCourseFinderContext();

  if (!selection.course) navigate("/explore");

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
                selectAddon(addon);
                navigate(`${toSlug(addon.name)}/colleges`);
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
