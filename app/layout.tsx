import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/components/core/layout/MainLayout";
import { KakaoLoginScript } from "@/components/core/scripts/KakaoLogin";
import { Og } from "@/components/core/scripts/Og";

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
      <Og />
      <KakaoLoginScript />
      <body className={"w-[100vw] flex justify-center "}>
        <MainLayout className={" w-full relative max-w-[500px]"}>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
