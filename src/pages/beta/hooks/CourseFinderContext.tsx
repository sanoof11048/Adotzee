import { createContext, useContext, useState, useRef, useEffect } from "react";
import { apiService } from "../../../Admin/services/api";
import { useNavigate } from "react-router-dom";

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
  reset: () => void;
}

const CourseFinderContext = createContext<CourseFinderContextType | undefined>(undefined);

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

  const cacheRef = useRef<{ courses: Record<string, any[]>; addons: Record<string, any[]>; colleges: Record<string, any[]> }>({
    courses: {},
    addons: {},
    colleges: {},
  });

  const navigate = useNavigate();

  // Load selection & cache from localStorage
  useEffect(() => {
    const savedSelection = localStorage.getItem("courseFinderSelection");
    const savedCache = localStorage.getItem("courseFinderCache");

    if (savedCache) cacheRef.current = JSON.parse(savedCache);
    if (savedSelection) {
      const sel = JSON.parse(savedSelection);
      setSelection(sel);

      // Prefetch data
      if (sel.type && sel.stream) fetchCourses(sel.type, sel.stream, false);
      if (sel.course) fetchAddons(sel.course.id, false);
      if (sel.addon) fetchColleges(sel.addon.id, false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("courseFinderSelection", JSON.stringify(selection));
  }, [selection]);

  useEffect(() => {
    localStorage.setItem("courseFinderCache", JSON.stringify(cacheRef.current));
  }, [cacheRef.current]);

  const fetchCourses = async (type: string, stream: string, setSel = true) => {
    const key = `${type}-${stream}`;
    if (cacheRef.current.courses[key]) {
      setCourses(cacheRef.current.courses[key]);
      return;
    }
    setLoading(true);
    try {
      const res = await apiService.filterCourses(type, stream);
      cacheRef.current.courses[key] = res.data.data;
      setCourses(res.data.data);
    } finally {
      setLoading(false);
      if (setSel) setSelection((prev) => ({ ...prev, type, stream, course: null, addon: null }));
    }
  };

  const fetchAddons = async (courseId: number, setSel = true) => {
    const key = `${courseId}`;
    if (cacheRef.current.addons[key]) {
      setAddons(cacheRef.current.addons[key]);
      return;
    }
    setLoading(true);
    try {
      const res = await apiService.getAddonsByCourse(courseId);
      cacheRef.current.addons[key] = res.data.data;
      setAddons(res.data.data);
    } finally {
      setLoading(false);
      if (setSel) setSelection((prev) => ({ ...prev, course: { id: courseId }, addon: null }));
    }
  };

  const fetchColleges = async (addonId: number, setSel = true) => {
    const key = `${addonId}`;
    if (cacheRef.current.colleges[key]) {
      setColleges(cacheRef.current.colleges[key]);
      return;
    }
    setLoading(true);
    try {
      const res = await apiService.getCollegesByAddon(addonId);
      cacheRef.current.colleges[key] = res.data.data;
      setColleges(res.data.data);
    } finally {
      setLoading(false);
      if (setSel) setSelection((prev) => ({ ...prev, addon: { id: addonId } }));
    }
  };

  const setType = (type: string) => {
    setSelection({ type, stream: "", course: null, addon: null });
    setCourses([]);
    setAddons([]);
    setColleges([]);
    navigate('/explore')
  };

  const setStream = (stream: string) => {
    if (!selection.type) return;
    setSelection((prev) => ({ ...prev, stream }));
    fetchCourses(selection.type, stream);
  };

  const selectCourse = (course: any) => {
    setSelection((prev) => ({ ...prev, course, addon: null }));
    fetchAddons(course.id);
  };

  const selectAddon = (addon: any) => {
    setSelection((prev) => ({ ...prev, addon }));
    fetchColleges(addon.id);
  };

  const reset = () => {
    setSelection({ type: "", stream: "", course: null, addon: null });
    setCourses([]);
    setAddons([]);
    setColleges([]);
    localStorage.clear();
    navigate
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
        reset,
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
