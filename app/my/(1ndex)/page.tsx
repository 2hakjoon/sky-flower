"use client";

import { SimpleError } from "@/components/ui/error/SImpleError";
import { ProfileImageUpload } from "@/components/ui/input/ProfileImageUpload";
import { useMe } from "@/hooks/auth/useMe";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SkyFlowerEmpty } from "@/components/ui/empty/SkyFlower";
import { useImageUpload } from "@/hooks/upload/useImageUpload";
import { useUpdateProfileImage } from "@/hooks/auth/useUpdateProfileImage";
import { deleteCookie } from "cookies-next";

export default function Mypage() {
  const { data, error, notLoggedIn } = useMe();
  const methods = useForm();
  const router = useRouter();
  const {
    data: uploadResult,
    isLoading: isUploading,
    error: UploadError,
    mutate: uploadUrl,
  } = useImageUpload();
  const { mutate: updateProfileImage } = useUpdateProfileImage();

  const profileImageFile = methods.watch("profileImage");

  useEffect(() => {
    if (notLoggedIn) {
      router.push("/login");
    }
  }, [notLoggedIn]);

  useEffect(() => {
    if (profileImageFile) {
      uploadUrl(profileImageFile);
    }
  }, [profileImageFile]);

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    console.log("file: ", file);
    uploadUrl(file);
  };

  useEffect(() => {
    if (!uploadResult) return;
    updateProfileImage({ profileImageUrl: uploadResult });
  }, [uploadResult]);

  if (error || UploadError) {
    return <SimpleError />;
  }

  if (!data) {
    return <></>;
  }

  const handleLogout = () => {
    deleteCookie("access-token");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col px-[20px] mt-[24px] ">
      <FormProvider {...methods}>
        <div className="tr05 text=gy-600 flex flex-col gap-[8px] bg-wt">
          <span>{"프로필 사진"}</span>
          <ProfileImageUpload
            onChange={onImageUpload}
            imageUrl={uploadResult || data.data.profileImageUrl}
          />
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
      <div
        onClick={handleLogout}
        className="py-[24px] px-full tb02 text-gy-900 flex justify-center bg-wt  cursor-pointer"
      >
        <div>{"로그아웃"}</div>
      </div>

      <div className="w-full bg-gy-40 h-[12px]" />
      <div className="py-[24px] px-full tb02 text-rd-500 flex justify-center bg-wt cursor-pointer">
        <div>{"회원탈퇴"}</div>
      </div>
      <div className="w-full bg-gy-40 h-[12px]" />

      <SkyFlowerEmpty />
    </div>
  );
}
