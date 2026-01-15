// ./Context/CourseFinderContext.tsx
import { createContext, useContext, useState } from "react";
import { apiService } from "../../../Admin/services/api";

interface Selection {
  type: string;
  stream: string;
  course: any | null;
  addon: any | null;
}

interface CourseFinderContextType {
  selection: Selection;
  setType: (type: string) => void;
  setStream: (stream: string) => void;
  selectCourse: (course: any) => void;
  selectAddon: (addon: any) => void;
  types: string[];
  streams: string[];
  courses: any[];
  addons: any[];
  colleges: any[];
  loading: boolean;
}

const CourseFinderContext = createContext<CourseFinderContextType | undefined>(
  undefined
);

export const CourseFinderProvider = ({ children }: { children: React.ReactNode }) => {
  const [selection, setSelection] = useState<Selection>({
    type: "",
    stream: "",
    course: null,
    addon: null,
  });

  const [courses, setCourses] = useState<any[]>([]);
  const [addons, setAddons] = useState<any[]>([]);
  const [colleges, setColleges] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const types = ["UG", "PG"];
  const streams = ["Science", "Commerce", "Humanities"];

  // Simple cache
  const cache: Record<string, any> = {};

  const handleApi = async (key: string, fn: () => Promise<any>, setter: (data: any) => void) => {
    setLoading(true);
    try {
      if (cache[key]) {
        setter(cache[key]);
      } else {
        const res = await fn();
        cache[key] = res.data.data;
        setter(res.data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const setType = (type: string) => {
    setSelection({ type, stream: "", course: null, addon: null });
    setCourses([]);
    setAddons([]);
    setColleges([]);
  };

  const setStream = (stream: string) => {
    setSelection((prev) => ({ ...prev, stream }));
    handleApi(`courses-${selection.type}-${stream}`, () =>
      apiService.filterCourses(selection.type, stream), 
      setCourses
    );
  };

  const selectCourse = (course: any) => {
    setSelection((prev) => ({ ...prev, course }));
    handleApi(`addons-${course.id}`, () => apiService.getAddonsByCourse(course.id), setAddons);
  };

  const selectAddon = (addon: any) => {
    setSelection((prev) => ({ ...prev, addon }));
    handleApi(`colleges-${addon.id}`, () => apiService.getCollegesByAddon(addon.id), setColleges);
  };

  return (
    <CourseFinderContext.Provider
      value={{
        selection,
        setType,
        setStream,
        selectCourse,
        selectAddon,
        types,
        streams,
        courses,
        addons,
        colleges,
        loading,
      }}
    >
      {children}
    </CourseFinderContext.Provider>
  );
};

export const useCourseFinderContext = () => {
  const context = useContext(CourseFinderContext);
  if (!context) throw new Error("useCourseFinderContext must be used within a CourseFinderProvider");
  return context;
};
