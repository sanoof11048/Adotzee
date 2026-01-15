import { useCourseFinderContext } from "../hooks/CourseFinderContext";
import { useNavigate, useParams } from "react-router-dom";

const StreamPage = () => {
  const { streams, setStream } = useCourseFinderContext();
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Select Stream</h1>

      <div className="grid grid-cols-2 gap-6">
        {streams.map((stream) => (
          <div
            key={stream}
            onClick={() => {
              setStream(stream); // context caches courses
              navigate(`${stream.toLowerCase()}`); // relative path
            }}
            className="p-6 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
          >
            <h2 className="text-xl font-semibold">{stream}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default StreamPage;
