'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Remove any previous default icon getter to avoid conflicts
delete (L.Icon.Default.prototype as { _getIconUrl?: () => void })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

type LeafletMapProps = {
  position: [number, number];
};

export default function LeafletMap({ position }: LeafletMapProps) {
  return (
    <div style={{ width: '100%', height: '300px', zIndex: '-2' }}>
      <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%', zIndex: '-0'  }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* No icon={customIcon} here! */}
        <Marker position={position}>
          <Popup>Via Minghetti 1, Predazzo (TN)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

