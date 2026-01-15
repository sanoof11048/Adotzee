import { useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L, { Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../../utils/leafletFix";

interface Props {
  lat: number;
  lng: number;
  onChange: (lat: number, lng: number) => void;
}

/* ---------------- Center Button Component ---------------- */

function CenterButton({ position }: { position: [number, number] }) {
  const map = useMap();

  return (
    <button
      onClick={() => map.setView(position, map.getZoom(), { animate: true })}
      className="absolute z-10 top-4 right-4 bg-white border border-gray-300 shadow-md px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition"
      title="Center map on marker"
    >
      Center
    </button>
  );
}

/* ---------------- Map Click Handler ---------------- */

function MapClickHandler({
  onClick,
}: {
  onClick: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });

  return null;
}

/* ---------------- Main Component ---------------- */

export default function MapPicker({ lat, lng, onChange }: Props) {
  // Use tuple instead of LatLngExpression (fixes TS errors)
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    lat,
    lng,
  ]);

  const markerRef = useRef<LeafletMarker | null>(null);

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35],
  });

  // Marker drag handler
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (!marker) return;

        const pos = marker.getLatLng();
        const next: [number, number] = [pos.lat, pos.lng];

        setCurrentPosition(next);
        onChange(pos.lat, pos.lng);
      },
    }),
    [onChange]
  );

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={currentPosition}
        zoom={13}
        scrollWheelZoom
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "0.5rem",
        }}
      >
        <CenterButton position={currentPosition} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap
          </a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          draggable
          position={currentPosition}
          eventHandlers={eventHandlers}
          ref={markerRef}
          icon={customIcon}
        >
          <Popup>
            <div className="text-sm">
              <p>Drag me to set location</p>
              <p className="font-medium">
                Lat: {currentPosition[0].toFixed(5)} <br />
                Lng: {currentPosition[1].toFixed(5)}
              </p>
            </div>
          </Popup>
        </Marker>

        <MapClickHandler
          onClick={(lat, lng) => {
            setCurrentPosition([lat, lng]);
            onChange(lat, lng);
          }}
        />
      </MapContainer>
    </div>
  );
}
