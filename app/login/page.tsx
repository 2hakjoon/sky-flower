"use client";

export default function Login() {
  const loginWithKakao = () => {
    if (!window.Kakao) return;
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:4432",
    });
  };

  return (
    <>
      <span>{"로그인"}</span>
      <div onClick={loginWithKakao}>
        <img
          src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
        />
      </div>
    </>
  );
}
