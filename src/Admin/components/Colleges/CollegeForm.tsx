import { useState } from "react";
import LocationModal from "./LocationModal";
import { MapPin, XCircle, CheckCircle } from "lucide-react";

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
  // Required
  const [name, setName] = useState(college?.name || "");
  const [address, setAddress] = useState(college?.address || "");

  // Optional location
  const [latitude, setLatitude] = useState<number | null>(
    college?.latitude ?? null
  );
  const [longitude, setLongitude] = useState<number | null>(
    college?.longitude ?? null
  );

  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>(
    college?.googleMapsUrl || ""
  );

  const [isRecommended, setIsRecommended] = useState<boolean>(
    college?.isRecommended ?? false
  );

  const [openMap, setOpenMap] = useState(false);

  /* ---------------- Google Maps URL Parser ---------------- */

  const extractLatLngFromGoogleUrl = (url: string) => {
    const match =
      url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/) ||
      url.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);

    if (!match) return;

    setLatitude(Number(match[1]));
    setLongitude(Number(match[2]));
  };

  /* ---------------- Clear Location ---------------- */

  const clearLocation = () => {
    setLatitude(null);
    setLongitude(null);
    setGoogleMapsUrl("");
  };

  /* ---------------- Submit ---------------- */

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

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="font-medium">
            College Name <span className="text-red-500">*</span>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-3 rounded-lg w-full"
          />
        </div>

        {/* Address */}
        <div>
          <label className="font-medium">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border p-3 rounded-lg w-full h-20 resize-none"
          />
        </div>

        {/* Google Maps URL */}
        <div>
          <label className="font-medium">Google Maps Link (optional)</label>
          <input
            value={googleMapsUrl}
            onChange={(e) => {
              setGoogleMapsUrl(e.target.value);
              extractLatLngFromGoogleUrl(e.target.value);
            }}
            placeholder="Paste Google Maps URL"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        {/* Location Status */}
        {hasLocation ? (
          <div className="flex items-center justify-between bg-green-50 border border-green-200 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle size={18} />
              <span className="font-medium">Location picked from map</span>
            </div>
            <button
              type="button"
              onClick={clearLocation}
              className="text-red-600 hover:underline"
            >
              Clear
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setOpenMap(true)}
            className="flex items-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            <MapPin size={20} />
            Pick Location from Map
          </button>
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
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Save College"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 py-3 rounded-lg"
          >
            Cancel
          </button>
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
