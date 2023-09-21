"use client";

import { User } from "@/components/icons/User";
import { useMe } from "@/hooks/auth/useMe";
import Link from "next/link";

export const HomeTopNavigation = () => {
  const { data, error, isLoading } = useMe();
  console.log("data: ", data);
  const isLoggedIn = data?.success === true;

  return (
    <>
      <div className="h-[50px] w-full" />
      <div className="flex items-center justify-between fixed top-0 w-full h-[50px] bg-wt z-10 max-w-[500px] mx-auto pl-[20px] pr-[16px] py[15px]">
        <Link href="/">
          <span className="head05">{"SKYFLOWER"}</span>
        </Link>
        {isLoggedIn ? (
          <Link href="/my">
            {data.data.profileImageUrl ? (
              <img
                className="w-[32px] h-[32px] rounded-full"
                src={data.data.profileImageUrl}
              />
            ) : (
              <div className="w-[32px] h-[32px]">
                <User />
              </div>
            )}
          </Link>
        ) : (
          <Link href="/login">
            <span className="tb03 text-bl-600">{"로그인/가입"}</span>
          </Link>
        )}
      </div>
    </>
  );
};
