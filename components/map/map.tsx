'use client'

import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Title } from '../ui/title';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';


type MapProps = {
  center?: { lat: number; lng: number }
  title?: string;
  containerStyle?: { [key: string]: string }
  zoom?: number;
  isFooter?: boolean;
  headline?: string;
  handleGetDirections?: () => void;
}

const Map: React.FC<MapProps> = ({ handleGetDirections, isFooter = false, zoom = 15, center = { lat: 50.453287353, lng: 30.521614601 }, containerStyle = { width: '100%', height: '250px' }, title = 'вул. Михайлівська, 13', headline = 'Як дістатися до нас?' }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = useState(null)
  const [routeKey, setRouteKey] = useState<number>(0);

  const path = usePathname()
  const locale = useLocale()
  const router = useRouter();



  const isAboutUs = path === `/${locale}/contacts`

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
  }

  const displayDirections = (origin: { lat: number; lng: number }, destination: { lat: number; lng: number }) => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          // Display the directions on the map
          const directionsRenderer = new window.google.maps.DirectionsRenderer();
          if (map) {
            directionsRenderer.setMap(map);
            directionsRenderer.setDirections(result);
          }
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  }

  const getDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Call a function to display directions on the map
          displayDirections(userLocation, center);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }

    setRouteKey((prevKey) => prevKey + 1);
  }

  const handleDirections = () => {
    // Call a function to get directions
    getDirections();
  }

  useEffect(() => {
    getDirections()
  }, [handleGetDirections])


  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])


  return isLoaded ? (
    <>
      {!isAboutUs ? <Title onClick={handleDirections} className={cn(`text-[24px] cursor-pointer leading-[33.6px] font-SFPRegular text-left mb-8 w-full flex items-center justify-center`, isFooter ? 'hidden' : 'flex')}>
        <span className={cn(`pb-1 border-b-[2px]`, headline === 'Дізнатися маршут до події' ? 'border-black' : 'border-white')}>{headline}</span>
      </Title> : null}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ mapTypeControl: false, zoom: zoom, panControl: false, streetViewControl: false }}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <MarkerF position={center} title={title} />
        <></>
      </GoogleMap>
    </>
  ) : <></>
}

export default React.memo(Map)