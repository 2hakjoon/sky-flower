"use client";

import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useJoin } from "@/hooks/auth/useJoin";
import { SimpleError } from "@/components/ui/error/SImpleError";
import { setCookie } from "cookies-next";
import { CLIENT_DOMAIN, IS_DEBUG } from "@/util/const";

export default function LoginProcessing() {
  const router = useRouter();
  const param = useSearchParams();
  const code = param.get("code");

  const {
    data: loginData,
    error: loginError,
    isLoading,
    mutate: mutateLogin,
  } = useLogin();
  const { data: joinData, error: joinError, mutate: mutateJoin } = useJoin();
  const needSignUp = loginData?.data?.needSignup;

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
      return;
    }
  }, [joinData]);

  useEffect(() => {
    if (!loginData || loginData?.success !== true) {
      return;
    }
    if (needSignUp === true) {
      router.push("/join");
      return;
    }
    setCookie("access-token", loginData?.data?.accessToken, {
      domain: CLIENT_DOMAIN,
      secure: !IS_DEBUG,
      // httpOnly: true,
      path: "/",
    });
    router.push("/");
  }, [loginData]);

  if (loginError || joinError) return <SimpleError />;

  return <></>;
}
