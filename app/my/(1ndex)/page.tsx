"use client";

import { SimpleError } from "@/components/ui/error/SImpleError";
import { ProfileImageUpload } from "@/components/ui/input/ProfileImageUpload";
import { useMe } from "@/hooks/auth/useMe";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SkyFlowerEmpty } from "@/components/ui/empty/SkyFlower";

export default function Mypage() {
  const { data, error, notLoggedIn } = useMe();
  const methods = useForm();
  const router = useRouter();

  useEffect(() => {
    if (notLoggedIn) {
      router.push("/login");
    }
  }, [notLoggedIn]);

  if (error) {
    return <SimpleError />;
  }

  if (!data) {
    return <></>;
  }

  return (
    <div className="flex flex-col px-[20px] mt-[24px] ">
      <FormProvider {...methods}>
        <div className="tr05 text=gy-600 flex flex-col gap-[8px] bg-wt">
          <span>{"프로필 사진"}</span>
          <ProfileImageUpload name="profileImage" />
        </div>

        <div className="tr05 text=gy-600  gap-[8px] flex items-center justify-between bg-wt ">
          <div className="flex- flex-col w-full ">
            <span>{"프로필 사진"}</span>
            <div className="flex items-center justify-between">
              <span>{data.data.nickname}</span>
              <Link
                href={"my/edit"}
                className="flex items-center gap-[8px] text-or-400"
              >
                {"수정"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                >
                  <path
                    d="M1.7002 8.2002L4.41103 5.68299C4.8371 5.28736 4.8371 4.61303 4.41103 4.2174L1.7002 1.7002"
                    stroke="#E3694B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </FormProvider>
      <div className="w-full bg-gy-40 h-[12px]" />
      <div className="py-[24px] px-full tb02 text-gy-900 flex justify-center bg-wt ">
        <div>{"로그아웃"}</div>
      </div>

      <div className="w-full bg-gy-40 h-[12px]" />
      <div className="py-[24px] px-full tb02 text-rd-500 flex justify-center bg-wt">
        <div>{"회원탈퇴"}</div>
      </div>
      <div className="w-full bg-gy-40 h-[12px]" />

      <SkyFlowerEmpty />
    </div>
  );
}
