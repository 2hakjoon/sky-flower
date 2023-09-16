"use client";

import { useRouter } from "next/navigation";

export const BottomNavigation = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-around absolute left-0 bottom-0 w-full">
        <div onClick={() => router.push("/", { scroll: false })}>
          <span>{"홈"}</span>
        </div>
        <div onClick={() => router.push("/flower-garden", { scroll: false })}>
          <span>{"지도"}</span>
        </div>
        <div onClick={() => router.push("/flowers", { scroll: false })}>
          <span>{"사진첩"}</span>
        </div>
        <div onClick={() => router.push("/gardening", { scroll: false })}>
          <span>{"업로드"}</span>
        </div>
      </div>
    </div>
  );
};
