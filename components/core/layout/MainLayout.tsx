import { BottomNavigation } from "@/components/ui/navigations/BottomNavigation";
import { TopNavigation } from "@/components/ui/navigations/TopNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <main className={className}>
      <TopNavigation />
      {children}
      <BottomNavigation />
    </main>
  );
};
