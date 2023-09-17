"use client";

import { KAKAO_LOGIN_JAVASCRIPT_KEY } from "@/util/const";
import Script from "next/script";

export const KakaoLoginScript = () => {
  return (
    <Script
      onLoad={() => {
        if (!window.Kakao) return;
        window.Kakao.init(KAKAO_LOGIN_JAVASCRIPT_KEY); // 사용하려는 앱의 JavaScript 키 입력
      }}
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
      integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
      crossOrigin="anonymous"
    ></Script>
  );
};
