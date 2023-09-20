import { UploadPlus } from "@/components/icons/UploadPlus";

interface ProfileImageUploadProps {
  name?: string;
}

export const ProfileImageUpload = ({ name }: ProfileImageUploadProps) => {
  return (
    <>
      <label
        className="w-full aspect-square flex items-center justify-center rounded-[20px] bg-[#F5F5F5]"
        htmlFor="imageUpload"
      >
        <UploadPlus />
      </label>
      <input
        className="hidden"
        type="file"
        name={name}
        id="imageUpload"
        accept="png/jpeg"
      />
    </>
  );
};
