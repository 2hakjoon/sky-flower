import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useQuery } from "@tanstack/react-query";

export const useMe = () => {
  const fetcher = async () => {
    const { data } = await axiosClientQuery.get("/auth/me");
    return data;
  };
  return useQuery(["me"], fetcher);
};
