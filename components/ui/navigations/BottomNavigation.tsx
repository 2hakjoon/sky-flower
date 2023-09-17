import Link from "next/link";

export const BottomNavigation = () => {
  return (
    <>
      <div className="h-[50px] w-full" />
      <div className="flex items-center justify-around fixed left-0 bottom-0 w-full h-[50px] bg-[gray] z-10">
        <Link href="/">
          <span>{"홈"}</span>
        </Link>
        <Link href="/flower-garden">
          <span>{"지도"}</span>
        </Link>
        <Link href="/flowers">
          <span>{"사진첩"}</span>
        </Link>
        <Link href="/gardening">
          <span>{"업로드"}</span>
        </Link>
      </div>
    </>
  );
};
