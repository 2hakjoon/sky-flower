import Link from "next/link";

export const TopNavigation = () => {
  return (
    <>
      <div className="h-[50px] w-full" />

      <div className="flex items-center justify-between fixed left-0 top-0 w-full h-[50px] bg-[gray] z-10">
        <Link href="/">
          <span>{"홈"}</span>
        </Link>
        <Link href="/login">
          <span>{"로그인"}</span>
        </Link>
      </div>
    </>
  );
};
