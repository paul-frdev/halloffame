'use client'

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

export const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapCenter: [number, number] = [50.453287353, 30.521614601];
  const mapZoom: number = 25;
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current).setView(mapCenter, mapZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: '/images/marker-icon.png',
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconSize: [20, 30],
    });

    const marker = L.marker(mapCenter, { icon: customIcon }).addTo(map);

    const popupContent = 'м. Київ, вул. Михайлівська, 13';

    marker.bindPopup(popupContent);


    return () => {
      map.remove();
    };
  }, [mapCenter, mapZoom]);

  return <div ref={mapContainerRef} style={{ width: '400px', height: '180px' }} />;
};
