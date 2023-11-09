"use client";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

interface MapProps {
  center?: [number, number];
  zoom?: number;
  isContact?: boolean;
  setSelectedAddress?: (e: string) => void;
  width?: string;
  height?: string;
  locations: { lat: number, lng: number }[]
  mapId?: string;
  useClusters?: boolean;
  address?: string;
}

const TextMarker = ({ text, lat, lng }: { text: string, lat: number, lng: number }) => <div className='marker'>{text}</div>;

export const GoogleMap: React.FC<MapProps> = ({ width = '350px', address = 'м. Київ, вул, Михайлівська, 13а', height = '250px', center, zoom, isContact = false }) => {
  const defaultProps = {
    center: {
      lat: 50.453287353,
      lng: 30.521614601
    },
    zoom: 14
  };

  return (
    <div id="map" style={{ width: width, height: height }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <TextMarker
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

