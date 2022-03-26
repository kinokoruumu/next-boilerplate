import axios, { AxiosInstance } from "axios";
import applyConverters from "axios-case-converter";

export type APIClient = AxiosInstance;

export function createAPIClient(): APIClient {
  const instance = axios.create({
    baseURL: process.env.API_ORIGIN,
    timeout: 20000,
  });

  instance.interceptors.request.use((request) => {
    const headers = request.headers != null ? request.headers : {};

    request.headers = headers;
    return request;
  });

  return applyConverters(instance);
}

export const apiClient = createAPIClient();
