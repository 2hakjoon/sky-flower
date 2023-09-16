"use client";

import { ImageOverlay } from "@/components/core/image-upload/ImageOverlay";
import { ImageUploadButton } from "@/components/core/image-upload/ImageUploadButton";
import GoogleMapComponent from "@/components/ui/google-map/GoogleMapComponent";
import { MarkerProps } from "@/components/ui/google-map/GoogleMapComponent";
import Compressor from "compressorjs";
import { useState, useEffect } from "react";

export default function Home() {
  const [uploadedImages, setUploadedImages] = useState<MarkerProps[]>([]);
  console.log("uploadedImages: ", uploadedImages);
  const [center, setCenter] = useState<{ lat: number; lng: number }>();
  const [dataUrl, setSetDataUrl] = useState<string>();

  const onChangeCenter = (center: { lat: number; lng: number }) => {
    setCenter(center);
  };

  const onUploaded = (File: File) => {
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      setSetDataUrl(dataURL as string);
    };
    reader.readAsDataURL(File);
  };

  const onOverlayed = (File: File) => {
    console.log("File: ", File);
    new Compressor(File, {
      quality: 0.8,
      width: 200,
      height: 200,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        var reader = new FileReader();
        reader.onload = function () {
          var dataURL = reader.result;
          setUploadedImages((prev) => [
            ...prev,
            {
              latitude: center?.lat || 0,
              longitude: center?.lng || 0,
              image: dataURL as string,
            },
          ]);
        };
        reader.readAsDataURL(result);
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  return (
    <div className="w-full h-full ">
      <GoogleMapComponent
        markers={uploadedImages}
        onChangeCenter={onChangeCenter}
      />
      <ImageUploadButton onUploaded={onUploaded} />
      <ImageOverlay url={dataUrl} onOverlayed={onOverlayed} />
    </div>
  );
}