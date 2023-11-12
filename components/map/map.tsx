'use client'

import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';


type MapProps = {
  center?: { lat: number; lng: number }
  title?: string;
  containerStyle?: { [key: string]: string }
  zoom?: number
}

const Map: React.FC<MapProps> = ({ zoom = 15, center = { lat: 50.453287353, lng: 30.521614601 }, containerStyle = { width: '100%', height: '250px' }, title = 'вул. Михайлівська, 13' }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = useState(null)


  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
  }
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapTypeControl: false, zoom: zoom }}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <MarkerF position={center} title={title} />
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)