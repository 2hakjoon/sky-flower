import { UploadPlus } from "@/components/icons/UploadPlus";
import { useController, useFormContext } from "react-hook-form";

interface ProfileImageUploadProps {
  name: string;
  rules?: any;
  defaultValue?: string;
}

export const ProfileImageUpload = ({
  name,
  defaultValue,
  rules,
}: ProfileImageUploadProps) => {
  const { control } = useFormContext();

  const {
    field: { onChange, value, ref, onBlur },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue ?? "",
  });

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
