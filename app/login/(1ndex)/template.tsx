import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { SubTopNavigation } from "@/components/ui/navigations/SubPageNavigation";

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubTopNavigation title="로그인/회원가입" />
      {children}
    </>
  );
}
