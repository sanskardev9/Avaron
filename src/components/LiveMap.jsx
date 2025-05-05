import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RecenterMap = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      map.setView([coordinates.lat, coordinates.lng], 13, {
        animate: true,
      });
    }
  }, [coordinates]);

  return null;
};

const LiveMap = ({ coordinates }) => {
  const defaultCoordinates = { lat: 22.9734, lng: 78.6569 };
  const center = coordinates?.lat ? coordinates : defaultCoordinates;

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coordinates.lat, coordinates.lng]}>
        <Popup>
          Current Location <br /> Lat: {coordinates.lat}, Lng: {coordinates.lng}
        </Popup>
      </Marker>
      <RecenterMap coordinates={coordinates} />
    </MapContainer>
  );
};

export default LiveMap;
