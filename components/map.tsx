"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  isContact?: boolean;
}

export const Map: React.FC<MapProps> = ({ center, zoom, isContact = false }) => {
  const mapCenter: [number, number] = [50.453287353, 30.521614601];
  const mapZoom: number = 25;
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current).setView(mapCenter, mapZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "/images/marker-icon.png",
      iconRetinaUrl: "/images/marker-icon-2x.png",
      iconSize: [20, 30],
    });

    const marker = L.marker(mapCenter, { icon: customIcon }).addTo(map);

    const popupContent = "м. Київ, вул. Михайлівська, 13";

    marker.bindPopup(popupContent);

    return () => {
      map.remove();
    };
  }, [mapCenter, mapZoom]);

  return <div ref={mapContainerRef} style={{ width: !isContact ? "400px" : "557px", height: !isContact ? "180px" : "357px" }} />;
};
