import { getPreSignedUrl } from "@/util/upload/getPreSignedUrl";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useImageUpload = () => {
  const fetcher = async (file: File): Promise<any> => {
    const preSignedUrlData = await getPreSignedUrl(file);

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.put(preSignedUrlData.data.signedUrl, formData, {
      headers: { "Content-Type": file.type },
    });
    return res.data;
  };
  return useMutation(["imageUpload"], fetcher);
};
