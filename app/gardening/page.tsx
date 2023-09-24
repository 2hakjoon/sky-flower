"use client";

import { ImageOverlay } from "@/components/core/image-upload/ImageOverlay";
import { ImageUploadButton } from "@/components/core/image-upload/ImageUploadButton";
import GoogleMapComponent from "@/components/ui/google-map/GoogleMapComponent";
import { MarkerProps } from "@/components/ui/google-map/GoogleMapComponent";
import { SubmitButton } from "@/components/ui/input/SubmitButton";
import { MapPingIcon } from "@/components/ui/navigations/BottomNavigation";
import { useWritePost } from "@/hooks/posts/useWritePost";
import { url2File } from "@/util/file/dataUrltoFunction";
import { getPreSignedUrl } from "@/util/upload/getPreSignedUrl";
import axios from "axios";
import Compressor from "compressorjs";
import { useEffect, useState } from "react";

export default function Gardening() {
  const [uploadedImages, setUploadedImages] = useState<MarkerProps[]>([]);
  const [center, setCenter] = useState<{ lat: number; lng: number }>();
  const [address, setAddress] = useState<string | undefined>("");
  const [dataUrl, setSetDataUrl] = useState<string>();
  const [photoUrl, setPhotoUrl] = useState<string>();
  const { data: writePostData, mutate: writePost } = useWritePost();

  const onChangeCenter = (data: {
    lat: number;
    lng: number;
    address?: string;
  }) => {
    setCenter({ lat: data.lat, lng: data.lng });
    setAddress(data.address);
    if (uploadedImages?.length) {
      setUploadedImages((prev) => [
        {
          latitude: data.lat,
          longitude: data.lng,
          image: prev[0].image,
        },
      ]);
    }
  };

  const onUploaded = async (File: File) => {
    var reader = new FileReader();
    reader.onload = async function () {
      var dataURL = reader.result;
      setSetDataUrl(dataURL as string);
      const file = await url2File(dataURL as string, File.name);
      const preSignedUrlData = await getPreSignedUrl(file);
      const res = await axios.put(preSignedUrlData.data.signedUrl, file);
      setPhotoUrl(preSignedUrlData.data.s3Url);
    };
    reader.readAsDataURL(File);
  };

  const onOverlayed = (File: File) => {
    new Compressor(File, {
      quality: 0.8,
      width: 72,
      height: 72,
      resize: "cover",

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        const reader = new FileReader();
        reader.onload = async function () {
          const dataURL = reader.result;
          const file = await url2File(dataURL as string, File.name);
          const preSignedUrlData = await getPreSignedUrl(file);
          const res = await axios.put(preSignedUrlData.data.signedUrl, file);
          setUploadedImages((prev) => [
            {
              latitude: center?.lat || 0,
              longitude: center?.lng || 0,
              image: preSignedUrlData?.data?.s3Url as string,
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

  const onSubmit = () => {
    if (!uploadedImages?.length) return;
    const marker = uploadedImages?.[0];
    writePost({
      photoUrl: photoUrl,
      markerPhotoUrl: marker.image,
      latitude: marker.latitude,
      longitude: marker.longitude,
      address: address,
      // "cityName": "string",
      // "districtName": "string",
      // "townName": "string"
    });
  };

  useEffect(() => {
    if (writePostData?.data?.success) {
      window.location.href = "/";
    }
  }, [writePostData]);

  return (
    <div className="w-full h-full flex flex-col">
      <GoogleMapComponent
        markers={uploadedImages}
        onChangeCenter={onChangeCenter}
      />
      <div className="mt-[20px] flex">
        <MapPingIcon />
        <span className="body01 text-gy-600">{address}</span>
      </div>
      <ImageUploadButton onUploaded={onUploaded} />

      <SubmitButton onClick={onSubmit} />

      <div className="w-[0px] h-[0px] overflow-hidden">
        <ImageOverlay key={dataUrl} url={dataUrl} onOverlayed={onOverlayed} />
      </div>
    </div>
  );
}
