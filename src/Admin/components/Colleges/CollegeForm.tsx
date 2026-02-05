import { useState } from "react";
import LocationModal from "./LocationModal";
import { MapPin, CheckCircle } from "lucide-react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import {
  College,
  CollegeCreateDTO,
  CollegeUpdateDTO,
} from "../../../types";

interface Props {
  college?: College; // Proper type instead of any
  onSubmit: (data: CollegeCreateDTO | CollegeUpdateDTO) => void;
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

  // Extract lat/lng from multiple Google Maps URL formats
  const extractLatLngFromGoogleUrl = (url: string) => {
    try {
      let match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (match) {
        setLatitude(Number(match[1]));
        setLongitude(Number(match[2]));
        return;
      }

      match = url.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (match) {
        setLatitude(Number(match[1]));
        setLongitude(Number(match[2]));
        return;
      }

      match = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
      if (match) {
        setLatitude(Number(match[1]));
        setLongitude(Number(match[2]));
      }
    } catch {
      console.warn("Could not extract coordinates");
    }
  };

  const clearLocation = () => {
    setLatitude(null);
    setLongitude(null);
    setGoogleMapsUrl("");
    setOpenMap(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const basePayload: CollegeCreateDTO = {
      name: name.trim(),
      address: address.trim(),
      isRecommended,
      addonIds: college?.addons?.map((a) => a.id) ?? [],
    };

    if (latitude !== null && longitude !== null) {
      basePayload.latitude = latitude;
      basePayload.longitude = longitude;
    }

    if (googleMapsUrl) basePayload.googleMapsUrl = googleMapsUrl;

    // If editing, send UpdateDTO
    if (college?.id) {
      const updatePayload: CollegeUpdateDTO = {
        ...basePayload,
        id: college.id,
      };
      onSubmit(updatePayload);
    } else {
      onSubmit(basePayload);
    }
  };

  const hasLocation = latitude !== null && longitude !== null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {college ? "Edit College" : "Add New College"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* College Name */}
        <Input
          label="College Name"
          placeholder="Enter college name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* City Name */}
        <Input
          label="City"
          placeholder="Enter city"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        {/* Google Maps URL */}
        <Input
          label="Google Maps Link (optional)"
          placeholder="Paste Google Maps URL"
          value={googleMapsUrl}
          onChange={(e) => {
            const url = e.target.value;
            setGoogleMapsUrl(url);
            extractLatLngFromGoogleUrl(url);
          }}
        />

        {/* Location Status */}
        {hasLocation ? (
          <div className="flex items-center justify-between bg-green-50 border border-green-200 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle size={18} />
              <span className="font-medium">
                Location selected ({latitude?.toFixed(4)},{" "}
                {longitude?.toFixed(4)})
              </span>
            </div>

            <Button type="button" variant="ghost" size="sm" onClick={clearLocation}>
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
            id="recommended"
            type="checkbox"
            checked={isRecommended}
            onChange={(e) => setIsRecommended(e.target.checked)}
          />
          <label htmlFor="recommended" className="font-medium cursor-pointer">
            Recommended
          </label>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            loading={loading}
            fullWidth
            disabled={!name.trim() || !address.trim()}
          >
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
