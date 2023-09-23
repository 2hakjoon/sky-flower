import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useMutation } from "@tanstack/react-query";

export const useWritePost = () => {
  const fetcher = async (data: any): Promise<any> => {
    const res = await axiosClientQuery.post("/posts", data);
    return res;
  };
  return useMutation(["uploadPost"], fetcher);
};
