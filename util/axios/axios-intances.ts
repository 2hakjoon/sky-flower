import axios from "axios";
import { API_URL } from "../const";

export const axiosClientQuery = axios.create({ baseURL: API_URL });
