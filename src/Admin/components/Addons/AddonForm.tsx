import React, { useEffect, useState, useMemo, useRef } from "react";
import toast from "react-hot-toast";
import { apiService } from "../../services/api";
import {
  AddonCreateDTO,
  AddonUpdateDTO,
  AddonResponseDTO,
  CourseResponseDTO,
  CollegeResponseDTO,
} from "../../../types";
import { swalConfirm } from "../../../utils/swalConfirm";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { LucideSearch, X } from "lucide-react";

interface Props {
  addon?: AddonResponseDTO;
  onSubmit: (data: AddonCreateDTO | AddonUpdateDTO) => void;
  onCancel: () => void;
  loading?: boolean;
}

const AddonForm: React.FC<Props> = ({ addon, onSubmit, onCancel, loading }) => {
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState<number | "">("");
  const [collegeIds, setCollegeIds] = useState<number[]>([]);
  const [courses, setCourses] = useState<CourseResponseDTO[]>([]);
  const [colleges, setColleges] = useState<CollegeResponseDTO[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [courseSearch, setCourseSearch] = useState("");
  const [collegeSearch, setCollegeSearch] = useState("");
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);

  const courseRef = useRef<HTMLDivElement>(null);
  const collegeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([apiService.getCourses(), apiService.getColleges()])
      .then(([c, col]) => {
        setCourses(c.data.data);
        setColleges(col.data.data);
      })
      .catch(() => toast.error("Failed to load form data"));
  }, []);

  useEffect(() => {
    if (!addon || !courses.length || !colleges.length) return;
    const course = courses.find((c) => c.name === addon.courseName);
    const selectedColleges = colleges
      .filter((c) => addon.collegeNames.includes(c.name))
      .map((c) => c.id);
    setName(addon.name);
    setCourseId(course?.id ?? "");
    setCollegeIds(selectedColleges);
    setCourseSearch(course?.name ?? "");
  }, [addon, courses, colleges]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Addon name is required";
    if (!courseId) e.courseId = "Please select a course";
    setErrors(e);
    if (Object.keys(e).length) toast.error("Please fix the errors");
    return !Object.keys(e).length;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const payload = { name, courseId: Number(courseId), collegeIds };
    onSubmit(addon ? { ...payload, id: addon.id } : payload);
  };

  const toggleCollege = (id: number) => {
    setCollegeIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const removeCollege = (id: number) => setCollegeIds((prev) => prev.filter((x) => x !== id));

  const handleCancel = async () => {
    const confirmed = await swalConfirm({
      title: "Cancel changes?",
      text: "Unsaved changes will be lost.",
      confirmText: "Yes, cancel",
      cancelText: "Stay",
      icon: "question",
    });
    if (confirmed) onCancel();
  };

  const filteredCourses = useMemo(() => {
    const q = courseSearch.toLowerCase();
    return courses.filter((c) => c.name.toLowerCase().includes(q));
  }, [courseSearch, courses]);

  const filteredColleges = useMemo(() => {
    const q = collegeSearch.toLowerCase();
    return colleges
      .filter((c) => !collegeIds.includes(c.id))
      .filter((c) => c.name.toLowerCase().includes(q));
  }, [collegeSearch, colleges, collegeIds]);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!courseRef.current?.contains(e.target as Node)) setShowCourseDropdown(false);
      if (!collegeRef.current?.contains(e.target as Node)) setShowCollegeDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pe-10 ">
      {/* Addon Name */}
      <Input
        label="Addon Name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        placeholder="Artificial Intelligence"
      />

      {/* Course Selection */}
      <div className="relative" ref={courseRef}>
        <Input
          label="Select Course *"
          value={courseSearch}
          onChange={(e) => {
            setCourseSearch(e.target.value);
            setShowCourseDropdown(true);
          }}
          icon={LucideSearch}
          iconPosition = "right"
          error={errors.courseId}
          onFocus={() => setShowCourseDropdown(true)}
        />
        {showCourseDropdown && filteredCourses.length > 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl mt-1 max-h-52 overflow-y-auto shadow-lg">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex justify-between transition"
                onClick={() => {
                  setCourseId(c.id);
                  setCourseSearch(c.name);
                  setShowCourseDropdown(false);
                }}
              >
                <span>{c.name}</span>
                <span className="text-gray-400 text-xs">{c.type}</span>
              </div>
            ))}
          </div>
        )}
        {showCourseDropdown && filteredCourses.length === 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl mt-1 p-2 text-gray-400 text-sm">
            No courses found
          </div>
        )}
      </div>

      {/* College Multi-select */}
      <div className="relative" ref={collegeRef}>
        <label className="text-sm font-semibold text-gray-700">Available Colleges</label>
        {/* Selected Chips */}
        <div className="flex flex-wrap gap-2 mb-2 mt-1">
          {collegeIds.map((id) => {
            const c = colleges.find((col) => col.id === id);
            if (!c) return null;
            return (
              <div key={id} className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {c.name}
                <X size={14} className="cursor-pointer hover:text-blue-900" onClick={() => removeCollege(id)} />
              </div>
            );
          })}
        </div>

        <Input
          placeholder="Search colleges..."
          value={collegeSearch}
          onChange={(e) => {
            setCollegeSearch(e.target.value);
            setShowCollegeDropdown(true);
          }}
          icon={LucideSearch}
          onFocus={() => setShowCollegeDropdown(true)}
        />

        {showCollegeDropdown && filteredColleges.length > 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl mt-1 max-h-42 pe-10 overflow-y-auto shadow-lg">
            {filteredColleges.map((c) => (
              <div
                key={c.id}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
                onClick={() => {
                  toggleCollege(c.id);
                  setCollegeSearch("");
                  setShowCollegeDropdown(false);
                }}
              >
                {c.name}
              </div>
            ))}
          </div>
        )}

        {showCollegeDropdown && filteredColleges.length === 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl mt-1 p-2 text-gray-400 text-sm">
            No colleges found
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-22 border-t">
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={loading}>
          {addon ? "Update Addon" : "Create Addon"}
        </Button>
      </div>
    </form>
  );
};

export default AddonForm;
