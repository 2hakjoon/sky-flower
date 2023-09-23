"use client";

import { MapPingIcon } from "@/components/ui/navigations/BottomNavigation";
import { ChangeEvent } from "react";

interface ImageUploadButtonProps {
  onUploaded: (url: File) => void;
}

export const ImageUploadButton = ({ onUploaded }: ImageUploadButtonProps) => {
  const uploadImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const File = e?.target?.files?.[0];
    if (!File) {
      return;
    }
    console.log("File: ", File);
    onUploaded(File);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[20px] mb-[50px]">
      <label className="" htmlFor="imageUpload">
        <div className="flex gap-[4px] items-center">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3327 7.74542L14.9993 7.74542C16.8403 7.74542 18.3327 9.2378 18.3327 11.0788L18.3327 15.2454C18.3327 17.0864 16.8403 18.5788 14.9993 18.5788L4.99935 18.5788C3.1584 18.5788 1.66602 17.0864 1.66602 15.2454L1.66602 11.0788C1.66602 9.23781 3.1584 7.74542 4.99935 7.74542L6.66602 7.74542"
              stroke="#24C5DB"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12.499 5.24536L10.5883 3.33462C10.2628 3.00918 9.7352 3.00918 9.40977 3.33462L7.49902 5.24536"
              stroke="#24C5DB"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M9.99902 3.57874L9.99902 13.5787"
              stroke="#24C5DB"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span className="tb02 text-bl-500">{"클릭해서 업로드하기"}</span>
        </div>
      </label>
      <input
        id="imageUpload"
        className="invisible"
        type="file"
        name="picture"
        accept="image/*"
        capture="user"
        onChange={uploadImageHandler}
      />
    </div>
  );
};
