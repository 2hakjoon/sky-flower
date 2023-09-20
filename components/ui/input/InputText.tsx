interface InputTextProps {
  placeholder?: string;
  name?: string;
}

export const InputText = ({ placeholder, name }: InputTextProps) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      className="pl-[16px] body01 text-gy-600 pr-[8px] py-[8px] rounded-[4px] border-[1px] border-gy-600"
      type="text"
    />
  );
};
