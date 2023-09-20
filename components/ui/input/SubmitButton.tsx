import clsx from "clsx";

interface SubmitButtonProps {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const SubmitButton = ({
  title = "확인",
  onClick,
  disabled,
}: SubmitButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`tb02 py-[16px] rounded-full ${clsx({
        "bg-bl-500 text-wt": !disabled,
        "bg-gy-40 text-gy-180": disabled,
      })}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
