import { useCourseFinderContext } from "../hooks/CourseFinderContext";
import { useNavigate } from "react-router-dom";

const TypePage = () => {
  const { types, setType } = useCourseFinderContext();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Select Course Type</h1>

      <div className="grid grid-cols-2 gap-6">
        {types.map((type) => (
          <div
            key={type}
            onClick={() => {
              setType(type); // save in context
              navigate(type.toLowerCase()); // relative path
            }}
            className="p-6 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
          >
            <h2 className="text-xl font-semibold">{type}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default TypePage;
