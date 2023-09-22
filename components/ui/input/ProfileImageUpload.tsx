import { UploadPlus } from "@/components/icons/UploadPlus";
import { useController, useFormContext } from "react-hook-form";

interface ProfileImageUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileImageUpload = ({ onChange }: ProfileImageUploadProps) => {
  return (
    <>
      <label
        className="w-full aspect-square flex items-center justify-center rounded-[20px] bg-[#F5F5F5]"
        htmlFor="imageUpload"
      >
        <UploadPlus />
      </label>
      <input
        onChange={onChange}
        className="hidden"
        type="file"
        id="imageUpload"
        accept="png/jpeg"
      />
    </>
  );
};
