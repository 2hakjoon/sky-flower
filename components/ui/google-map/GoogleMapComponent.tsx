"use client";

import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GOOGLE_GEOCODING_API_KEY, GOOGLE_MAP_API_KEY } from "@/util/const";
import debounce from "lodash/debounce";
import axios from "axios";

export interface MarkerProps {
  latitude: number;
  longitude: number;
  image: string;
}

interface GoogleMapComponentProps {
  onChangeCenter: (center: {
    lat: number;
    lng: number;
    address?: string;
  }) => void;
  mapContainerStyle?: React.CSSProperties;
  markers: MarkerProps[];
}

function GoogleMapComponent({
  onChangeCenter,
  markers,
  mapContainerStyle = { width: "100%", height: "500px" },
}: GoogleMapComponentProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  const [center, setCenter] = React.useState<{ lat: number; lng: number }>({
    lat: 37.526006,
    lng: 126.936508,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [zoom, setZoom] = React.useState(15);

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const onBoundsChanged = debounce(async () => {
    if (!map) return;
    const center = map.getCenter();
    if (!center) return;
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${center.lat()},${center.lng()}&location_type=ROOFTOP&result_type=street_address|administrative_area_level_1|administrative_area_level_1&key=${GOOGLE_GEOCODING_API_KEY}`
    );

    const address = res?.data?.results?.[0]?.formatted_address
      ?.split(" ")
      ?.splice(1, 2)
      ?.join(" ");
    onChangeCenter({
      lat: center.lat(),
      lng: center.lng(),
      address,
    });
    console.log("res: ", res);
  }, 200);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
      },
      () => {},
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  }, []);

  return isLoaded ? (
    <GoogleMap
      options={{
        disableDefaultUI: true,
      }}
      mapContainerStyle={mapContainerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onBoundsChanged={onBoundsChanged}
      zoom={zoom}
      onZoomChanged={() => {
        console.log("map: ", map);
      }}
    >
      {markers.map((marker, index) => (
        <MarkerF
          key={`${index}-${zoom}-${marker.image}`}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          icon={{
            url: marker.image,
            scaledSize: new google.maps.Size(90, 98),
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
