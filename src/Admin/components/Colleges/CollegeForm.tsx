import { useState } from "react";
import LocationModal from "./LocationModal";
import { MapPin, CheckCircle } from "lucide-react";
import Button from "../UI/Button";
import Input from "../UI/Input"; // <-- custom input

interface Props {
  college?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function CollegeForm({
  college,
  onSubmit,
  onCancel,
  loading,
}: Props) {
  const [name, setName] = useState(college?.name || "");
  const [address, setAddress] = useState(college?.address || "");
  const [latitude, setLatitude] = useState<number | null>(college?.latitude ?? null);
  const [longitude, setLongitude] = useState<number | null>(college?.longitude ?? null);
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>(college?.googleMapsUrl || "");
  const [isRecommended, setIsRecommended] = useState<boolean>(college?.isRecommended ?? false);
  const [openMap, setOpenMap] = useState(false);

  const extractLatLngFromGoogleUrl = (url: string) => {
    const match =
      url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/) ||
      url.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);

    if (!match) return;

    setLatitude(Number(match[1]));
    setLongitude(Number(match[2]));
  };

  const clearLocation = () => {
    setLatitude(null);
    setLongitude(null);
    setGoogleMapsUrl("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: any = {
      name,
      address,
      isRecommended,
      addonIds: [],
    };

    if (latitude !== null && longitude !== null) {
      payload.latitude = latitude;
      payload.longitude = longitude;
    }

    if (googleMapsUrl) payload.googleMapsUrl = googleMapsUrl;
    if (college?.id) payload.id = college.id;

    onSubmit(payload);
  };

  const hasLocation = latitude !== null && longitude !== null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {college ? "Edit College" : "Add New College"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 pe-10">
        {/* College Name */}
        <Input
          label="College Name"
          placeholder="Enter college name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Address */}
        <Input
          label="Address"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="h-20"
        />

        {/* Google Maps URL */}
        <Input
          label="Google Maps Link (optional)"
          placeholder="Paste Google Maps URL"
          value={googleMapsUrl}
          onChange={(e) => {
            setGoogleMapsUrl(e.target.value);
            extractLatLngFromGoogleUrl(e.target.value);
          }}
        />

        {/* Location Status */}
        {hasLocation ? (
          <div className="flex items-center justify-between bg-green-50 border border-green-200 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle size={18} />
              <span className="font-medium">Location picked from map</span>
            </div>

            <Button variant="ghost" size="sm" onClick={clearLocation}>
              Clear
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            onClick={() => setOpenMap(true)}
            icon={MapPin}
            fullWidth
          >
            Pick Location from Map
          </Button>
        )}

        {/* Recommended */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isRecommended}
            onChange={(e) => setIsRecommended(e.target.checked)}
          />
          <label className="font-medium">Recommended</label>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" loading={loading} fullWidth>
            Save College
          </Button>

          <Button type="button" variant="secondary" onClick={onCancel} fullWidth>
            Cancel
          </Button>
        </div>
      </form>

      {/* Map Modal */}
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
    </div>
  );
}
