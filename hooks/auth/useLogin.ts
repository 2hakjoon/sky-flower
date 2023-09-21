import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useMutation, useQuery } from "@tanstack/react-query";

interface ILoginResponse {
  success: boolean;
  data: {
    needSignup: boolean;
    accessToken?: string;
    oauthId?: string;
  };
}

export const useLogin = () => {
  const fetcher = async (code?: string | null): Promise<ILoginResponse> => {
    const res = await axiosClientQuery.post("/auth/login/kakao", { code });
    return res.data;
  };

  return useMutation(["login"], fetcher);
};
