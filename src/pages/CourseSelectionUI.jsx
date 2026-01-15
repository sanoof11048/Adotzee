import { useState } from 'react';
import { ChevronRight, BookOpen, GraduationCap, MapPin, Plus } from 'lucide-react';
import { apiService } from '../Admin/services/api';

const steps = ['type', 'stream', 'courses', 'addons', 'colleges'];

const CourseSelectionUI = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [selection, setSelection] = useState({
    type: '',
    stream: '',
    course: null,
    addon: null,
  });

  const [courses, setCourses] = useState([]);
  const [addons, setAddons] = useState([]);
  const [colleges, setColleges] = useState([]);

  const courseTypes = [
    { value: 'UG', label: 'Undergraduate (UG)', icon: '🎓' },
    { value: 'PG', label: 'Postgraduate (PG)', icon: '👨‍🎓' },
  ];

  const streams = [
    { value: 'Science', label: 'Science', icon: '🔬' },
    { value: 'Humanities', label: 'Humanities', icon: '📚' },
    { value: 'Commerce', label: 'Commerce', icon: '💼' },
  ];

  const handleApiCall = async (apiFn, onSuccess) => {
    setLoading(true);
    try {
      const res = await apiFn();
      onSuccess(res.data.data || res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = (type, stream) => {
    handleApiCall(
      () => apiService.filterCourses(type, stream),
      (data) => setCourses(data)
    );
    console.log(courses)
  };

  const fetchAddons = (courseId) => {
    handleApiCall(
      () => apiService.getAddonsByCourse(courseId),
      (data) => setAddons(data)
    );
  };

  const fetchColleges = (addonId) => {
    handleApiCall(
      () => apiService.getCollegesByAddon(addonId),
      (data) => setColleges(data)
    );
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Find Your Perfect Course</h1>
      <p className="text-gray-600 mb-6">
        Navigate through course types, streams, and specializations.
      </p>

      {currentStep > 0 && (
        <button
          onClick={prevStep}
          className="mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded"
        >
          ← Go Back
        </button>
      )}

      {/* TYPE */}
      {steps[currentStep] === 'type' && (
        <div className="grid md:grid-cols-2 gap-6">
          {courseTypes.map((type) => (
            <div
              key={type.value}
              onClick={() => {
                setSelection({ type: type.value, stream: '', course: null, addon: null });
                nextStep();
              }}
              className="p-6 border rounded-lg cursor-pointer hover:border-blue-500"
            >
              <div className="text-4xl">{type.icon}</div>
              <h3 className="text-xl font-semibold">{type.label}</h3>
            </div>
          ))}
        </div>
      )}

      {/* STREAM */}
      {steps[currentStep] === 'stream' && (
        <div className="grid md:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <div
              key={stream.value}
              onClick={() => {
                setSelection((prev) => ({ ...prev, stream: stream.value }));
                fetchCourses(selection.type, stream.value);
                nextStep();
              }}
              className="p-6 border rounded-lg cursor-pointer hover:border-blue-500"
            >
              <div className="text-4xl">{stream.icon}</div>
              <h3 className="text-xl font-semibold">{stream.label}</h3>
            </div>
          ))}
        </div>
      )}

      {/* COURSES */}
      {steps[currentStep] === 'courses' && (
        <div className="space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            courses.map((course) => (
              <div
                key={course.id}
                onClick={() => {
                  setSelection((prev) => ({ ...prev, course }));
                  fetchAddons(course.id);
                  nextStep();
                }}
                className="p-6 border rounded-lg cursor-pointer hover:border-blue-500"
              >
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <BookOpen />
                    <div>
                      <h3 className="font-semibold">{course.name}</h3>
                      <p className="text-gray-600">Duration: {course.duration}</p>
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ADDONS */}
      {steps[currentStep] === 'addons' && (
        <div className="space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            addons.map((addon) => (
              <div
                key={addon.id}
                onClick={() => {
                  setSelection((prev) => ({ ...prev, addon }));
                  fetchColleges(addon.id);
                  nextStep();
                }}
                className="p-6 border rounded-lg cursor-pointer hover:border-blue-500"
              >
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Plus />
                    <h3 className="font-semibold">{addon.name}</h3>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* COLLEGES */}
      {steps[currentStep] === 'colleges' && (
        <div className="grid md:grid-cols-2 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            colleges.map((college) => (
              <div
                key={college.id}
                className="p-6 border rounded-lg hover:border-blue-500"
              >
                <div className="flex gap-4">
                  <GraduationCap />
                  <div>
                    <h3 className="font-semibold">{college.name}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {college.location}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CourseSelectionUI;
