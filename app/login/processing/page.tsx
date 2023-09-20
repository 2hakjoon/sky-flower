"use client";

import { InputText } from "@/components/ui/input/InputText";
import { ProfileImageUpload } from "@/components/ui/input/ProfileImageUpload";
import { useLogin } from "@/hooks/auth/useLogin";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SimpleError } from "@/components/ui/error/SImpleError";
import { SubmitButton } from "@/components/ui/input/SubmitButton";

const schema = z.object({
  profileImageUrl: z.string().optional(),
  nickname: z.string().min(3).max(10),
});

interface IFomFields {
  profileImageUrl?: string;
  nickname: string;
}

export default function LoginProcessing() {
  const param = useSearchParams();
  const code = param.get("code");

  const { data, error, isLoading, mutate } = useLogin();
  console.log("error: ", error);
  // const needSignUp = data?.data?.needSignup;
  const needSignUp = true;

  const { getValues, handleSubmit, formState, watch } = useForm<IFomFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const nickname = watch("nickname");
  console.log("nickname: ", nickname);
  console.log("formState: ", formState?.errors?.nickname?.message);

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code]);

  // if (error) return <SimpleError />;
  // if (needSignUp === undefined || isLoading) return <></>;

  return (
    <div className="flex flex-col px-[16px] pt-[24px]">
      {needSignUp ? (
        <>
          <form
            onSubmit={handleSubmit(console.log)}
            className="flex flex-col gap-[24px] tr05 text-gy-600"
          >
            <div className="tr05 text=gy-600 flex flex-col gap-[8px]">
              <span>{"프로필 사진"}</span>
              <ProfileImageUpload name="profileImageUrl" />
            </div>
            <div className="tr05 text=gy-600 flex flex-col gap-[8px]">
              <span>{"닉네임"}</span>
              <InputText
                name="nickname1"
                placeholder="수정할 닉네임을 입력해 주세요."
              />
            </div>
            <SubmitButton disabled={!formState?.errors?.nickname?.message} />
          </form>
        </>
      ) : (
        <div>로그인이 완료되었습니다.</div>
      )}
    </div>
  );
}
