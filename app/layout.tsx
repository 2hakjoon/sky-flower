import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/components/core/layout/MainLayout";
import { KakaoLoginScript } from "@/components/core/scripts/KakaoLogin";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <KakaoLoginScript />
      <body className={"w-[100vw] flex justify-center "}>
        <MainLayout
          className={"max-[400px] h-[100vh - 20px]  relative w-[400px]"}
        >
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
