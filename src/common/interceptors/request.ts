import { AxiosRequestConfig } from "axios";

export const AxiosRequestInterceptor = (config: AxiosRequestConfig): any => {
  return config;
};

export const AxiosRequestErrorInterceptor = (error: any): Promise<any> => {
  return Promise.reject(error);
};
