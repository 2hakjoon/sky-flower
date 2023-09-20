"use client";

import { Chevron } from "@/components/icons/Chevron";
import { Close } from "@/components/icons/Close";
import { useMe } from "@/hooks/auth/useMe";
import { useRouter } from "next/navigation";

interface SubTopNavigationProps {
  title?: string;
  showBackButton?: boolean;
  onClickClose?: () => void;
}

export const SubTopNavigation = ({
  title = "",
  showBackButton = true,
  onClickClose,
}: SubTopNavigationProps) => {
  const { data, error, isLoading } = useMe();

  const router = useRouter();

  return (
    <>
      <div className="h-[62px] w-full" />
      <div className="flex items-center justify-between fixed top-0 w-full h-[62px] bg-wt z-10 max-w-[500px] mx-auto pl-[20px] pr-[16px] py[15px]">
        <div
          className="w-[24px] h-[24px] flex items-center justify-center"
          onClick={() => router.back()}
        >
          <Chevron />
        </div>
        <span className="head05 text-gy-900">{title}</span>
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <div onClick={onClickClose}>{onClickClose ? <Close /> : <></>}</div>
        </div>
      </div>
    </>
  );
};
