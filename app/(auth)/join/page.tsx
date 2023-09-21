"use client";

import { InputText } from "@/components/ui/input/InputText";
import { ProfileImageUpload } from "@/components/ui/input/ProfileImageUpload";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SubmitButton } from "@/components/ui/input/SubmitButton";
import { useJoin } from "@/hooks/auth/useJoin";
import { SimpleError } from "@/components/ui/error/SImpleError";
import { setCookie } from "cookies-next";
import { CLIENT_DOMAIN, IS_DEBUG } from "@/util/const";

const schema = z.object({
  profileImage: z
    .string()

    .optional(),
  nickname: z
    .string()
    .regex(/^[a-zA-Zㄱ-힣0-9]*$/, "특수문자를 제외하고 입력해주세요.")
    .min(1, "최소 1자 이상 입력해주세요!")
    .max(10, "10자까지 입력 가능합니다."),
});

interface IFomFields {
  profileImageUrl?: string;
  nickname: string;
}

export default function LoginProcessing() {
  const router = useRouter();
  const param = useSearchParams();
  const code = param.get("code");

  const { data: loginData, error, isLoading, mutate: mutateLogin } = useLogin();
  const { data: joinData, mutate: mutateJoin } = useJoin();
  const needSignUp = loginData?.data?.needSignup;

  const methods = useForm<IFomFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      nickname: "",
    },
  });

  const { getValues, handleSubmit, formState, watch, trigger } = methods;

  const nickname = watch("nickname");

  const handleJoin = (data: IFomFields) => {
    console.log("data: ", data);
    mutateJoin({
      ...data,
      loginType: "kakao",
      oauthId: loginData?.data?.oauthId,
    });
  };

  useEffect(() => {
    trigger();
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (code) {
      mutateLogin(code);
    }
  }, [code]);

  useEffect(() => {
    if (joinData && joinData?.success === true) {
      setCookie("access-token", joinData?.data?.accessToken, {
        domain: CLIENT_DOMAIN,
        secure: !IS_DEBUG,
        // httpOnly: true,
        path: "/",
      });
      router.push("/");
    }
    if (loginData && loginData?.success === true && needSignUp === false) {
      console.log("loginData: ", loginData);
      setCookie("access-token", loginData?.data?.accessToken, {
        domain: CLIENT_DOMAIN,
        secure: !IS_DEBUG,
        // httpOnly: true,
        path: "/",
      });
      router.push("/");
    }
  }, [joinData, loginData]);

  if (error) return <SimpleError />;
  if (needSignUp === undefined || isLoading) return <></>;

  return (
    <div className="flex flex-col px-[16px] pt-[24px]">
      {needSignUp ? (
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(handleJoin)}
            className="flex flex-col gap-[24px] tr05 text-gy-600"
          >
            <div className="tr05 text=gy-600 flex flex-col gap-[8px]">
              <span>{"프로필 사진"}</span>
              <ProfileImageUpload name="profileImage" />
            </div>
            <div className="tr05 text=gy-600 flex flex-col gap-[8px]">
              <span>{"닉네임"}</span>
              <InputText
                name="nickname"
                placeholder="수정할 닉네임을 입력해 주세요."
                errorMessage={formState?.errors?.nickname?.message}
              />
            </div>
            <SubmitButton
              disabled={!!formState?.errors?.nickname?.message || !nickname}
            />
          </form>
        </FormProvider>
      ) : (
        <></>
      )}
    </div>
  );
}
