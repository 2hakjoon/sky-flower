"use client";

import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "@/util/const";
import debounce from "lodash/debounce";

export interface MarkerProps {
  latitude: number;
  longitude: number;
  image: string;
}

const containerStyle = {
  width: "400px",
  height: "400px",
};

interface GoogleMapComponentProps {
  onChangeCenter: (center: { lat: number; lng: number }) => void;
  markers: MarkerProps[];
}

function GoogleMapComponent({
  onChangeCenter,
  markers,
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

  const onBoundsChanged = debounce(() => {
    if (!map) return;
    const center = map.getCenter();
    if (!center) return;
    onChangeCenter({ lat: center.lat(), lng: center.lng() });
  }, 200);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
    });
  }, []);

  return isLoaded ? (
    <GoogleMap
      options={{
        disableDefaultUI: true,
      }}
      mapContainerStyle={containerStyle}
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
          key={`${index}-${zoom}`}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          icon={{
            url: marker.image,
            scaledSize: new google.maps.Size(50, 50),
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
