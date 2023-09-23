"use client";

import { Kakao } from "@/components/icons/Kakao";
import { API_URL, CLIENT_URL } from "@/util/const";

export default function Login() {
  const loginWithKakao = () => {
    if (!window.Kakao) return;
    window.Kakao.Auth.authorize({
      redirectUri: CLIENT_URL + "/login/processing",
    });
  };

  return (
    <div className="flex flex-col items-center gap-[8px] h-full justify-between">
      <img
        src="/login.png"
        className={"w-[190px] h-[70vh] object-contain my-auto"}
      />
      <span className="text-tr03 ">
        {"SKYFLOWER는 최소한의 개인정보만 수집합니다"}
      </span>
      <div
        onClick={loginWithKakao}
        className="bg-[#FEE500] flex gap-[8px] justify-center items-center rounded-[8px] w-full py-[16px] cursor-pointer"
      >
        <Kakao />
        <span className="text-body02">{"카카오 로그인"}</span>
      </div>
    </div>
  );
}
