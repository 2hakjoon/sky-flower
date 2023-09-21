import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { SubTopNavigation } from "@/components/ui/navigations/SubPageNavigation";

export default function GardeningTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubTopNavigation title="닉네임 수정" />
      {children}
      <BottomNavigation />
    </>
  );
}
