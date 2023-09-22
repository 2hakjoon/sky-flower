import { UploadPlus } from "@/components/icons/UploadPlus";

interface ProfileImageUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageUrl?: string;
}

export const ProfileImageUpload = ({
  onChange,
  imageUrl,
}: ProfileImageUploadProps) => {
  console.log("imageUrl: ", imageUrl);
  return (
    <>
      <label
        className="w-full aspect-square flex items-center justify-center rounded-[20px] bg-[#F5F5F5] overflow-hidden relative"
        htmlFor="imageUpload"
      >
        {imageUrl && (
          <img className="w-full aspect-square absolute" src={imageUrl} />
        )}
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
