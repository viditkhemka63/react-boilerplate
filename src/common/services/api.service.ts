import Axios, { AxiosInstance } from "axios";
import {
  ResponseErrorInterceptor,
  ResponseInterceptor,
} from "src/common/interceptors/response";
import {
  AxiosRequestErrorInterceptor,
  AxiosRequestInterceptor,
} from "src/common/interceptors/request";
import { env } from "src/environments/enviroment";

const HttpClient: AxiosInstance = Axios.create({
  baseURL: env.api,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "",
  },
});

HttpClient.interceptors.request.use(
  AxiosRequestInterceptor,
  AxiosRequestErrorInterceptor
);
HttpClient.interceptors.response.use(
  ResponseInterceptor,
  ResponseErrorInterceptor
);

class ApiServiceClass {
  constructor(private http: AxiosInstance, private apiUrl: string) {}

  getPath(path: string) {
    return `${path}`;
  }

  get(path: string, params: any) {
    return this.http.get(this.getPath(path), { params });
  }

  put(path: string, body: any = {}) {
    return this.http.put(this.getPath(path), body);
  }

  post(path: string, body: any = {}) {
    return this.http.post(this.getPath(path), body);
  }

  delete(path: string) {
    return this.http.delete(this.getPath(path));
  }
}
export const ApiService = new ApiServiceClass(
  HttpClient,
  process.env.API_URL ?? ""
);
