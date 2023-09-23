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
import { setCookie } from "cookies-next";
import { CLIENT_DOMAIN, IS_DEBUG } from "@/util/const";
import { useState } from "react";

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
  const oauthId = param.get("oauthId");

  const { data: joinData, mutate: mutateJoin } = useJoin();
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");

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
      oauthId: oauthId,
    });
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

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
  }, [joinData]);

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      setUploadedImageUrl(dataURL as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col px-[16px] pt-[24px]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleJoin)}
          className="flex flex-col gap-[24px] tr05 text-gy-600"
        >
          <div className="tr05 text=gy-600 flex flex-col gap-[8px]">
            <span>{"프로필 사진"}</span>
            <ProfileImageUpload
              onChange={onImageUpload}
              imageUrl={uploadedImageUrl}
            />
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
    </div>
  );
}
