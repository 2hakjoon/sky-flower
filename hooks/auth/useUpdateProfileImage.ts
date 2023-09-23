import { axiosClientQuery } from "@/util/axios/axios-intances";
import { useMutation } from "@tanstack/react-query";
interface IMeResponse {
  success: true;
  data: {
    userId: 0;
    nickname: "string";
    profileImageUrl: "string";
  };
}

export const useUpdateProfileImage = () => {
  const fetcher = async (body: any): Promise<IMeResponse> => {
    const { data } = await axiosClientQuery.patch("/users/profile-image", body);
    return data;
  };
  return useMutation(["updateProfileImage"], fetcher);
};
