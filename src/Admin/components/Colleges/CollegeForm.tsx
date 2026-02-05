import { useState, useEffect } from "react";
import {
  MapPin,
  CheckCircle,
  Building2,
  Sparkles,
  Link as LinkIcon,
} from "lucide-react";
import LocationModal from "./LocationModal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import {
  CollegeCreateDTO,
  CollegeUpdateDTO,
  CollegeResponseDTO,
  AddonResponseDTO,
} from "../../../types";

interface Props {
  college?: CollegeResponseDTO;
  addons: AddonResponseDTO[];
  onSubmit: (data: CollegeCreateDTO | CollegeUpdateDTO) => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function CollegeForm({
  college,
  addons,
  onSubmit,
  onCancel,
  loading,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    googleMapsUrl: "",
    isRecommended: false,
  });

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [selectedAddonIds, setSelectedAddonIds] = useState<number[]>([]);
  const [openMap, setOpenMap] = useState(false);

  // Prefill on edit
  useEffect(() => {
    if (!college) return;
    setForm({
      name: college.name,
      city: college.address,
      googleMapsUrl: college.googleMapsUrl || "",
      isRecommended: college.isRecommended,
    });
    setLatitude(college.latitude ?? null);
    setLongitude(college.longitude ?? null);

    if (college.addons) {
      setSelectedAddonIds(
        addons
          .filter(a => college.addons.includes(a.name))
          .map(a => a.id)
      );
    }
  }, [college, addons]);

  const toggleAddon = (id: number) =>
    setSelectedAddonIds(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );

  const handleChange = (key: string, value: any) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: CollegeCreateDTO = {
      name: form.name,
      address: form.city,
      googleMapsUrl: form.googleMapsUrl || undefined,
      latitude: latitude ?? undefined,
      longitude: longitude ?? undefined,
      isRecommended: form.isRecommended,
      addonIds: selectedAddonIds,
    };

    college?.id ? onSubmit({ ...payload, id: college.id }) : onSubmit(payload);
  };

  const clearLocation = () => {
  setLatitude(null);
  setLongitude(null);
  setForm(prev => ({ ...prev, googleMapsUrl: "" }));
};


  const hasLocation = latitude && longitude;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 pe-10">
      {/* BASIC INFO */}
      <div className="grid sm:grid-cols-2 md:grid-cols-1
       gap-4">
        <Input
          label="College Name"
          value={form.name}
          onChange={e => handleChange("name", e.target.value)}
          required
        />
        <Input
          label="City"
          value={form.city}
          onChange={e => handleChange("city", e.target.value)}
          required
        />
      </div>

      {/* LOCATION */}
<div className="space-y-3">
  <Input
    label="Google Maps Link"
    value={form.googleMapsUrl}
    onChange={e => handleChange("googleMapsUrl", e.target.value)}
    placeholder="Paste maps link (optional)"
  />

  <Button
    type="button"
    variant="primary"
    icon={MapPin}
    fullWidth
    onClick={() => setOpenMap(true)}
  >
    {hasLocation ? "Change Location" : "Pick from Map"}
  </Button>

  {hasLocation && (
    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm">
      <div className="flex items-center gap-2 text-green-700 font-medium">
        <CheckCircle className="w-4 h-4" />
        <span>
          {latitude?.toFixed(5)}, {longitude?.toFixed(5)}
        </span>
      </div>

      <Button
        variant="bordered"
        onClick={clearLocation}
        
      >
        Clear
      </Button>
    </div>
  )}
</div>


      {/* RECOMMENDED */}
      <label className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-amber-50">
        <input
          type="checkbox"
          checked={form.isRecommended}
          onChange={e => handleChange("isRecommended", e.target.checked)}
          className="w-4 h-4"
        />
        <span className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Mark as Recommended
        </span>
      </label>

      {/* ADDONS */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="font-semibold flex items-center gap-2">
            <LinkIcon className="w-4 h-4 text-purple-600" />
            Addons
          </label>
          <span className="text-xs text-gray-500">
            {selectedAddonIds.length} selected
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {addons.map(addon => {
            const active = selectedAddonIds.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`p-3 border rounded-lg cursor-pointer transition ${active
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-200 hover:border-blue-300"
                  }`}
              >
                <div className="font-medium text-sm">{addon.name}</div>
                <div className="text-xs text-gray-500">{addon.courseName}</div>
              </div>
            );
          })}
        </div>
      </div>


      {/* ACTIONS */}
      <div className="flex gap-3 pt-2">
        <Button type="submit" loading={loading} className="flex-1">
          {college ? "Update College" : "Create College"}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      {/* MAP MODAL */}
      {openMap && (
        <LocationModal
          isOpen={openMap}
          onClose={() => setOpenMap(false)}
          lat={latitude ?? 11.2588}
          lng={longitude ?? 75.7804}
          onChange={(lat, lng) => {
            setLatitude(lat);
            setLongitude(lng);
          }}
        />
      )}
    </form>
  );
}