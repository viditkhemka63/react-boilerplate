import { AxiosResponse } from "axios";
import { LoggerService } from "src/common/services/logger.service";

export const ResponseInterceptor = (response: AxiosResponse): any => {
  LoggerService.debugg(response);
  return response.data;
};

export const ResponseErrorInterceptor = (error: any): Promise<any> => {
  return Promise.reject(error);
};
