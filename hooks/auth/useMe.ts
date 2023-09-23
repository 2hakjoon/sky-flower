import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

interface IMeResponse {
  success: true;
  data: {
    userId: 0;
    nickname: string;
    profileImageUrl: string;
  };
}

export const useMe = () => {
  const fetcher = async (): Promise<IMeResponse> => {
    const { data } = await axiosClientQuery.get("/auth/me");
    return data;
  };
  return {
    ...useQuery(["me"], fetcher, {
      enabled: !!getCookie("access-token"),
    }),
    notLoggedIn: !getCookie("access-token"),
  };
};
