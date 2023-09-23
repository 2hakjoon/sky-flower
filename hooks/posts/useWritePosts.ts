import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useQuery } from "@tanstack/react-query";

export const useWritePosts = () => {
  const fetcher = async (data: any): Promise<any> => {
    const res = await axiosClientQuery.get(
      "/posts?page=1&limit=10&sort=LIKE",
      data
    );
    return res?.data;
  };
  return useQuery(["posts"], fetcher);
};
