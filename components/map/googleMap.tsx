'use client'

import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";


function Map({ address, style }: { address: string, style: { [key: string]: string } }) {
  const mapRef = useRef(null);


  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });


    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current as any, {
            center: results?.[0].geometry.location,
            zoom: 4,
          });
          const marker = new google.maps.Marker({
            map: map,
            position: results?.[0].geometry.location,
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address]);

  return <div style={style} ref={mapRef} />;
}
export default Map;
