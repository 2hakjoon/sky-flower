"use client";

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
    onUploaded(File);
  };

  return (
    <input
      type="file"
      name="picture"
      accept="image/*"
      capture="user"
      onChange={uploadImageHandler}
    />
  );
};
