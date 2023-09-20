"use client";

import { useMe } from "@/hooks/auth/useMe";
import Link from "next/link";

export const HomeTopNavigation = () => {
  const { data, error, isLoading } = useMe();
  console.log("error: ", error);
  console.log("data: ", data);

  return (
    <>
      <div className="h-[50px] w-full" />
      <div className="flex items-center justify-between fixed top-0 w-full h-[50px] bg-wt z-10 max-w-[500px] mx-auto pl-[20px] pr-[16px] py[15px]">
        <Link href="/">
          <span className="head05">{"SKYFLOWER"}</span>
        </Link>
        <Link href="/login">
          <span className="tb03 text-bl-600">{"로그인/가입"}</span>
        </Link>
      </div>
    </>
  );
};
