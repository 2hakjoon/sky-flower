"use client";

import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LoginProcessing() {
  const param = useSearchParams();
  const res = axiosClientQuery.get("/auth/login/kakao", {
    params: { code: param.get("code") },
  });
  return <></>;
}
