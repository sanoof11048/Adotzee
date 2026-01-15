import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Search, GraduationCap, Clock, Layers } from "lucide-react";
import { apiService } from "../../services/api";
import Modal from "../UI/Modal";
import CourseForm from "./CourseForm";
import toast from "react-hot-toast";
import { CourseResponseDTO, CourseUpdateDTO } from "../../../types";
import { swalConfirm } from "../../../utils/swalConfirm";
import LinearLoading from "../../../components/common/LinearLoading";
import Button from "../UI/Button";
import Input from "../UI/Input";

const CourseManagement: React.FC = () => {
  const [courses, setCourses] = useState<CourseResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CourseUpdateDTO | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await apiService.getCourses();
      setCourses(res.data.data);
    } catch {
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSave = async (data: any) => {
    setSubmitting(true);
    try {
      editing
        ? await apiService.updateCourse(data)
        : await apiService.createCourse(data);
      await fetchCourses();
      setModalOpen(false);
      setEditing(null);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    const ok = await swalConfirm({
      title: "Delete course?",
      text: "This action cannot be undone.",
    });

    if (!ok) return;

    const t = toast.loading("Deleting...");
    try {
      await apiService.deleteCourse(id);
      toast.success("Course deleted", { id: t });
      fetchCourses();
    } catch {
      toast.error("Delete failed", { id: t });
    }
  };

  const filtered = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.stream.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LinearLoading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Course Management</h1>
            <p className="text-sm text-gray-600">Manage and organize your educational courses</p>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={Plus}
            onClick={() => setModalOpen(true)}
          >
            Add Course
          </Button>

        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
       <Input
  label="Search courses"
  helperText="You can search by course name or stream"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  icon={Search}
  iconPosition="right"
  className="p-5 bg-white/80"
/>

        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Course Name</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Stream</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <GraduationCap size={18} className="text-gray-700" />
                        </div>
                        <span className="font-medium text-gray-900">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                        <Layers size={14} />
                        {c.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-700 font-medium">{c.stream}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-gray-600">
                        <Clock size={14} />
                        {c.duration || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={Edit}
                          onClick={() => {
                            setEditing(c);
                            setModalOpen(true);
                          }}
                        />

                        <Button
                          variant="ghost"
                          size="sm"
                          icon={Trash2}
                          onClick={() => handleDelete(c.id)}
                          className="text-red-600 hover:bg-red-50"
                        />

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500 font-medium">No courses found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
            </div>
          )}
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gray-100 rounded-xl">
                    <GraduationCap size={20} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{c.name}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{c.stream}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Edit}
                    onClick={() => {
                      setEditing(c);
                      setModalOpen(true);
                    }}
                  />

                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Trash2}
                    onClick={() => handleDelete(c.id)}
                    className="text-red-600 hover:bg-red-50"
                  />

                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                  <Layers size={14} />
                  {c.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                  <Clock size={14} />
                  {c.duration || "N/A"}
                </span>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-12 text-center shadow-lg">
              <GraduationCap size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500 font-medium">No courses found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
            </div>
          )}
        </div>

      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={async () => {
          const confirmed = await swalConfirm({
            title: "Cancel changes?",
            text: "Unsaved changes will be lost.",
          });
          if (confirmed) {
            setEditing(null);
            setModalOpen(false);
          }
        }}
        title={editing ? "Edit Course" : "Add Course"}
        size="lg"
      >
        <CourseForm
          course={editing || undefined}
          onSubmit={handleSave}
          onCancel={() => {
            setEditing(null);
            setModalOpen(false);
          }}
          loading={submitting}
        />
      </Modal>
    </div>
  );
};

export default CourseManagement;