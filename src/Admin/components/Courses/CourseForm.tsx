import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import toast from "react-hot-toast";
import { CourseCreateDTO, CourseUpdateDTO } from "../../../types";
import { swalConfirm } from "../../../utils/swalConfirm";

interface CourseFormProps {
  course?: CourseUpdateDTO;
  onSubmit: (data: CourseCreateDTO | CourseUpdateDTO) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

const CourseForm: React.FC<CourseFormProps> = ({
  course,
  onSubmit,
  onCancel,
  loading = false,
}) => {
  const [formData, setFormData] = useState<CourseCreateDTO>({
    name: "",
    duration: "",
    type: "UG",
    stream: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (course) {
      setFormData({
        name: course.name,
        duration: course.duration,
        type: course.type,
        stream: course.stream,
      });
    }
  }, [course]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Course name is required";
    if (!formData.type) e.type = "Course type is required";
    if (!formData.stream) e.stream = "Stream is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the form errors");
      return;
    }

    try {
      if (course) {
        await onSubmit({ ...formData, id: course.id } as CourseUpdateDTO);
        toast.success("Course updated successfully");
      } else {
        await onSubmit(formData);
        toast.success("Course created successfully");
      }
    } catch {
      toast.error("Operation failed");
    }
  };

  const handleCancel = async () => {
    const confirmed = await swalConfirm({
      title: "Cancel changes?",
      text: "Unsaved changes will be lost.",
    });
    course = undefined
    if (confirmed) onCancel();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Course Name *"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        label="Duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="e.g. 3 years"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Course Type *"
          name="type"
          value={formData.type}
          onChange={handleChange}
          error={errors.type}
          options={[
            { value: "UG", label: "Undergraduate (UG)" },
            { value: "PG", label: "Postgraduate (PG)" },
          ]}
        />

        <Select
          label="Stream *"
          name="stream"
          value={formData.stream}
          onChange={handleChange}
          error={errors.stream}
          options={[
            { value: "Science", label: "Science" },
            { value: "Commerce", label: "Commerce" },
            { value: "Humanities", label: "Humanities" },
          ]}
        />
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button variant="outline"
          fullWidth type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          loading={loading}
          fullWidth
          type="submit" >
          {course ? "Update Course" : "Create Course"}
        </Button>
      </div>
    </form>
  );
};

export default CourseForm;
