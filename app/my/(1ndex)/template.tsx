import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { HomeTopNavigation } from "@/components/ui/navigations/HomeTopNavigation";
import { SubTopNavigation } from "@/components/ui/navigations/SubPageNavigation";

export default function GardeningTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubTopNavigation title="프로필" />
      {children}
      <BottomNavigation />
    </>
  );
}
