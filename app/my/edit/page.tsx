"use client";

import { InputText } from "@/components/ui/input/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { useEffect } from "react";
import { SubmitButton } from "@/components/ui/input/SubmitButton";

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
export default function ProfileEditPage() {
  const method = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      nickname: "",
    },
  });
  const { watch, trigger, formState } = method;
  console.log("formState: ", formState.errors.nickname);
  const nickname = watch("nickname");

  useEffect(() => {
    // trigger();
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="w-full flex flex-col">
      <FormProvider {...method}>
        <InputText
          name="nickname"
          placeholder="변경할 닉네임을 작성해주세요."
          errorMessage={formState?.errors?.nickname?.message}
        />
        <SubmitButton
          disabled={!!formState?.errors?.nickname?.message || !nickname}
        />
      </FormProvider>
    </div>
  );
}
