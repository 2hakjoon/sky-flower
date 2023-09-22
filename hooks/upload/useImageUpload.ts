import { getPreSignedUrl } from "@/util/upload/getPreSignedUrl";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useImageUpload = () => {
  const fetcher = async (file: File): Promise<any> => {
    const preSignedUrlData = await getPreSignedUrl(file);
    const res = await axios.put(preSignedUrlData.data.signedUrl, file);
    return preSignedUrlData?.data?.s3Url;
  };
  return useMutation(["imageUpload"], fetcher);
};
