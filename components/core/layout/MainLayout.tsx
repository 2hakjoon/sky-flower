import { ReactQueryClient } from "../react-query/ReactQeuryClient";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <ReactQueryClient>
      <main className={className}>{children}</main>
    </ReactQueryClient>
  );
};
