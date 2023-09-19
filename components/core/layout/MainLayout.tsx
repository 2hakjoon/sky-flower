import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { TopNavigation } from "@/components/ui/navigations/TopNavigation";
import { ReactQueryClient } from "../react-query/ReactQeuryClient";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <ReactQueryClient>
      <main className={className}>
        <TopNavigation />
        {children}
        <BottomNavigation />
      </main>
    </ReactQueryClient>
  );
};
