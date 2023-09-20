"use client";

import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useSearchParams } from "next/navigation";

export default function LoginProcessing() {
  const param = useSearchParams();
  const res = axiosClientQuery.get("/auth/login/kakao", {
    params: { code: param.get("code") },
  });
  console.log("res: ", res);
  return <></>;
}
