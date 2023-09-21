"use client";

import { SubTopNavigation } from "@/components/ui/navigations/SubPageNavigation";
import { useRouter } from "next/navigation";

export default function LoginProcessingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const onClickClose = () => {
    router.push("/login");
  };

  return (
    <>
      <SubTopNavigation title="부가 정보 입력" onClickClose={onClickClose} />
      {children}
    </>
  );
}
