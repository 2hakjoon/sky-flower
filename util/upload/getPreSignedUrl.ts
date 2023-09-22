import { ApiResponseBase } from "@/types/response.types";
import { axiosClientQuery } from "../axios/axios-intances";

interface IGetPreSignedUrlResponse {
  signedUrl: string;
  s3Url: string;
}

export const getPreSignedUrl = async (
  file: File
): Promise<ApiResponseBase<IGetPreSignedUrlResponse>> => {
  const res = await axiosClientQuery.post("/s3/generate-put-presigned-url", {
    originalFileName: file.name,
    fileExtension: file.type.split("/")[1],
    contentLength: file.size,
  });

  return res.data;
};
