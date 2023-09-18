"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface IIconProps {
  isActive?: boolean;
}

const activeColor = "#24C5DB";
const inactiveColor = "#959595";

const HomeIcon = ({ isActive }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M1.5 10.3178C1.5 9.09362 2.06058 7.93683 3.02142 7.17827L8.52142 2.83616C9.97466 1.68887 12.0253 1.68887 13.4786 2.83617L18.9786 7.17827C19.9394 7.93683 20.5 9.09362 20.5 10.3178V16.8794C20.5 19.0885 18.7091 20.8794 16.5 20.8794H15C14.4477 20.8794 14 20.4317 14 19.8794V16.8794C14 15.7748 13.1046 14.8794 12 14.8794H10C8.89543 14.8794 8 15.7748 8 16.8794V19.8794C8 20.4317 7.55228 20.8794 7 20.8794H5.5C3.29086 20.8794 1.5 19.0885 1.5 16.8794L1.5 10.3178Z"
        stroke={isActive ? activeColor : inactiveColor}
        stroke-width="2"
      />
    </svg>
  );
};

export const BottomNavigation = () => {
  const path = usePathname();

  const menus = [
    {
      href: "/",
      iconRender: (isActive: boolean) => <HomeIcon isActive={isActive} />,
      text: "홈",
    },
    {
      href: "/flower-garden",
      iconRender: (isActive: boolean) => <HomeIcon isActive={isActive} />,
      text: "지도",
    },
    // {
    //   href: "/flowers",
    //   iconRender: (isActive: boolean) => <HomeIcon isActive={isActive} />,
    //   text: "사진첩",
    // },
    {
      href: "/gardening",
      iconRender: (isActive: boolean) => <HomeIcon isActive={isActive} />,
      text: "업로드",
    },
  ];

  return (
    <>
      <div className="h-[50px] w-full" />
      <div className="flex items-center justify-between fixed w-full bottom-0 max-w-[500px] h-[56px] bg-wt z-10 mx-auto px-[12px] border-gy-60 border-t-[1px]">
        {menus.map(({ href, iconRender, text }) => {
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col gap-[4px] justify-center items-center px-[25px]"
            >
              {iconRender(path === href)}
              <span
                className={`tr04 ${clsx({
                  "text-bl-500": path === href,
                  "text-gy-400": path !== href,
                })}`}
              >
                {text}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
