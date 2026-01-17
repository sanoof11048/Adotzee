import React, { useEffect, useMemo, useState } from "react";
import { Plus, Edit, Trash2, Search, GraduationCap, Building2, ChevronDown, ChevronUp, Tag } from "lucide-react";
import toast from "react-hot-toast";
import Modal from "../UI/Modal";
import AddonForm from "./AddonForm";
import { apiService } from "../../services/api";
import { AddonResponseDTO } from "../../../types";
import { swalConfirm } from "../../../utils/swalConfirm";
import Button from "../UI/Button";
import LinearLoading from "../../../components/common/LinearLoading";

const AddonManagement: React.FC = () => {
  const [addons, setAddons] = useState<AddonResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddon, setEditingAddon] = useState<AddonResponseDTO | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  /* ---------------- Fetch ---------------- */

  const fetchAddons = async () => {
    try {
      setLoading(true);
      const res = await apiService.getAddons();
      setAddons(res.data.data);
    } catch {
      toast.error("Failed to load addons");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddons();
  }, []);

  /* ---------------- CRUD ---------------- */

  const handleCreate = async (data: any) => {
    try {
      setSubmitting(true);
      await apiService.createAddon(data);
      toast.success("Addon created");
      fetchAddons();
      closeModal();
    } catch {
      toast.error("Failed to create addon");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (data: any) => {
    try {
      setSubmitting(true);
      await apiService.updateAddon(data.id, data);
      toast.success("Addon updated");
      fetchAddons();
      closeModal();
    } catch {
      toast.error("Failed to update addon");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = await swalConfirm({
      title: "Delete Addon?",
      text: "This action cannot be undone.",
      icon: "warning",
      confirmText: "Yes, delete",
      cancelText: "No",
    });

    if (!confirmed) return;

    const t = toast.loading("Deleting...");
    try {
      await apiService.deleteAddon(id);
      toast.success("Deleted", { id: t });
      fetchAddons();
    } catch {
      toast.error("Delete failed", { id: t });
    }
  };

  /* ---------------- Helpers ---------------- */

  const openCreate = () => {
    setEditingAddon(null);
    setModalOpen(true);
  };

  const openEdit = (addon: AddonResponseDTO) => {
    setEditingAddon(addon);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingAddon(null);
  };

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredAddons = useMemo(() => {
    const q = search.toLowerCase();
    return addons.filter(
      a =>
        a.name.toLowerCase().includes(q) ||
        a.courseName.toLowerCase().includes(q)
    );
  }, [addons, search]);

  if (loading) return <LinearLoading />;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50/20 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Addon Management</h1>
            <p className="text-sm text-gray-600">Manage course addons & specializations</p>
          </div>

          <Button
            icon={Plus}
            onClick={openCreate}
          >
            Add Addon
          </Button>

        </div>

        {/* Search */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-5 shadow-lg">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              placeholder="Search by addon name or course..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAddons.map(addon => {
            const isExpanded = expandedCards.has(addon.id);
            const collegeCount = addon.collegeNames?.length || 0;
            const hasColleges = collegeCount > 0;
            const displayColleges = isExpanded ? addon.collegeNames : addon.collegeNames?.slice(0, 3);
            const hasMore = collegeCount > 3;

            return (
              <div
                key={addon.id}
                className="group bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2.5 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl shadow-md">
                      <Tag size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-1 wrap-break-word">
                        {addon.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={Edit}
                      onClick={() => openEdit(addon)}
                    />

                    <Button
                      variant="ghost"
                      size="sm"
                      icon={Trash2}
                      onClick={() => handleDelete(addon.id)}
                      className="text-red-600 hover:bg-red-50"
                    />
                  </div>
                </div>

                {/* Course Info */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap size={16} className="text-gray-500 flex shrink-0" />
                    <span className="text-gray-600">Course:</span>
                    <span className="font-medium text-gray-900 truncate">{addon.courseName}</span>
                  </div>
                </div>

                {/* Colleges */}
                {hasColleges ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 size={14} />
                        <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                          {collegeCount} Colleges
                        </span>
                      </div>
                    </div>

                    {/* Scrollable college list */}
                    <div className={`space-y-1.5 ${isExpanded ? 'max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100' : ''}`}>
                      {displayColleges?.map((college, i) => (
                        <div
                          key={i}
                          className="text-xs bg-linear-to-r from-gray-50 to-gray-100/50 text-gray-700 rounded-lg px-3 py-2 border border-gray-200/50 font-medium"
                        >
                          {college}
                        </div>
                      ))}
                    </div>

                    {/* Show more/less button */}
                    {hasMore && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={isExpanded ? ChevronUp : ChevronDown}
                        onClick={() => toggleExpand(addon.id)}
                        fullWidth
                      >
                        {isExpanded ? "Show less" : `Show ${collegeCount - 3} more`}
                      </Button>

                    )}
                  </div>
                ) : (
                  <div className="text-xs text-gray-400 italic py-3 text-center bg-gray-50 rounded-lg">
                    No colleges assigned yet
                  </div>

                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAddons.length === 0 && (
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-16 text-center shadow-lg">
            <div className="inline-flex p-4 bg-purple-50 rounded-2xl mb-4">
              <Tag size={48} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No addons found</h3>
            <p className="text-gray-500 mb-6">
              {search ? "Try adjusting your search criteria" : "Get started by creating your first addon"}
            </p>
            {!search && (
              <Button
                icon={Plus}
                onClick={openCreate}
              >
                Create First Addon
              </Button>

            )}
          </div>
        )}

      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={editingAddon ? "Edit Addon" : "Add Addon"}
        size="lg"
      >
        <AddonForm
          addon={editingAddon ?? undefined}
          onSubmit={editingAddon ? handleUpdate : handleCreate}
          onCancel={closeModal}
          loading={submitting}
        />
      </Modal>
    </div>
  );
};

export default AddonManagement;