import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useMutation } from "@tanstack/react-query";

interface IJoinResponse {
  success: boolean;
  data: {
    accessToken: string;
  };
}

export const useJoin = () => {
  const fetcher = async (data: any): Promise<IJoinResponse> => {
    console.log("data: ", data);
    const res = await axiosClientQuery.post("/auth/signup", { ...data });
    return res.data;
  };

  return useMutation(["join"], fetcher);
};
