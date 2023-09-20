import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { HomeTopNavigation } from "@/components/ui/navigations/HomeTopNavigation";

export default function FlowersTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeTopNavigation />
      {children}
      <BottomNavigation />
    </>
  );
}
