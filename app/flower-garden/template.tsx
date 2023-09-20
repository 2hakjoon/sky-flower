import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { TopNavigation } from "@/components/ui/navigations/TopNavigation";

export default function FlowerGardenTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      {children}
      <BottomNavigation />
    </>
  );
}
