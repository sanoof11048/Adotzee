import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toSlug } from "../../../utils/slug";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";

const CoursePage = () => {
  const { type, stream } = useParams();
  const navigate = useNavigate();
  const { courses, loading, setStream, selectCourse } = useCourseFinderContext();

  useEffect(() => {
    if (type && stream) setStream(stream); // fetch courses if not cached
  }, [type, stream]);

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
                selectCourse(course); // save in context
                navigate(`${toSlug(course.name)}`); // relative path
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
