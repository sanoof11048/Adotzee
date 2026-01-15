import MapPicker from "./MapPicker";
import { MapPin } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
  onChange: (lat: number, lng: number) => void;
}

export default function LocationModal({ isOpen, onClose, lat, lng, onChange }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-blue-50">
          <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
            <MapPin size={20} className="text-blue-600" />
            Select College Location
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 transition-colors text-xl font-bold"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Map Container */}
        <div className="flex-1">
          <MapPicker lat={lat} lng={lng} onChange={onChange} />
        </div>

        {/* Footer with Info */}
        <div className="p-4 border-t bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            Drag the marker to set the precise location. Latitude: <span className="font-medium">{lat.toFixed(5)}</span>, Longitude: <span className="font-medium">{lng.toFixed(5)}</span>
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </div>
  );
}
