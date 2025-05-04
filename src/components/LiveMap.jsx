import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Example coordinates (update with live data if needed)
const routeCoordinates = [
  [28.4112, 77.2941], // Start (Noida Sector 63)
  [28.4160, 77.3151], // Midpoint
  [28.4357, 77.3004],  // Destination
];

const isMobile = window.innerWidth <= 768;
const mapHeight = isMobile ? "300px" : "358px";

const LiveMap = () => {
  return (
    <MapContainer center={routeCoordinates[0]} zoom={16} style={{ height: mapHeight, width: "100%", borderRadius: '12px'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default LiveMap;
