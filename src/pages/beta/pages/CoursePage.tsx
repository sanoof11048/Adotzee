import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toSlug } from "../../../utils/slug";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";

const CoursePage = () => {
  const { type, stream } = useParams();
  const navigate = useNavigate();
  const { courses, loading, selection, setStream, selectCourse } = useCourseFinderContext();

  useEffect(() => {
    if (!type || !stream) {
      navigate("/explore", { replace: true });
      return;
    }
    if (!selection.stream) setStream(stream);
  }, [type, stream]);

  if (!selection.type || !selection.stream) return null;

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Select Course</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => {
                selectCourse(course);
                navigate(`${toSlug(course.name)}`);
              }}
              className="p-5 bg-white rounded-lg shadow cursor-pointer hover:border-blue-500 border"
            >
              <h2 className="font-semibold">{course.name}</h2>
              <p className="text-gray-500">{course.duration}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CoursePage;
