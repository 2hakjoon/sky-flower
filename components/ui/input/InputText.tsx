import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";

interface InputTextProps {
  placeholder?: string;
  name: string;
  rules?: any;
  defaultValue?: string;
  errorMessage?: string;
}

export const InputText = ({
  placeholder,
  name: inputName,
  rules,
  defaultValue,
  errorMessage,
}: InputTextProps) => {
  const { control } = useFormContext();

  const {
    field: { onChange, value, ref, onBlur },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: inputName,
    control,
    rules,
    defaultValue: defaultValue ?? "",
  });

  return (
    <div className="h-[76px] w-full flex flex-col">
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        name={inputName}
        className={`pl-[16px] body01 text-gy-600 pr-[8px] py-[8px] rounded-[4px]  ${clsx(
          {
            "border-gy-600 border-[1px]": !errorMessage,
            "border-rd-600 border-[2px]": errorMessage,
          }
        )}`}
        type="text"
      />
      <span className="pl-[16px] pt-[4px] text-rd-500">{errorMessage}</span>
    </div>
  );
};
