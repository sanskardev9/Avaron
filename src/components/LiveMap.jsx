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
  [28.6304, 77.3739], // Start (Noida Sector 63)
  [28.6285, 77.3730], // Midpoint
  [28.6270, 77.3700]  // Destination
];

const isMobile = window.innerWidth <= 768;
const mapHeight = isMobile ? "300px" : "443px";

const LiveMap = () => {
  return (
    <MapContainer center={routeCoordinates[0]} zoom={16} style={{ height: mapHeight, width: "100%", borderRadius: '12px'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={routeCoordinates} color="blue" />
      {routeCoordinates.map((position, idx) => (
        <Marker position={position} key={idx}>
          <Popup>Point {idx + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LiveMap;
