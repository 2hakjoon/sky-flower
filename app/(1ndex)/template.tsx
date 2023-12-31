import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { HomeTopNavigation } from "@/components/ui/navigations/HomeTopNavigation";

export default function HomeTemplate({
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
