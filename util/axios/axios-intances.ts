import axios from "axios";
import { API_URL } from "../const";
import { getCookie } from "cookies-next";

export const axiosClientQuery = axios.create({ baseURL: API_URL });

axiosClientQuery.interceptors.request.use(
  function (config) {
    const token = getCookie("access-token");
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    return newConfig as any;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
