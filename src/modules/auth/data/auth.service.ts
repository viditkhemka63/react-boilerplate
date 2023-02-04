import { ApiService } from "src/common/services/api.service";
import { LoggerService } from "src/common/services/logger.service";
import { APIS } from "src/config/api";

export class AuthService {
  static async login(body: { email: string; password: string }) {
    // return new Promise((resolve, reject) => {
    //   // if (email !== "user" || password !== "user") {
    //   //   reject("Invalid username or password");
    //   // }

    //   setTimeout(() => resolve(true), 2000);
    // });

    const res: any = await ApiService.post(APIS.LOGIN, body);
    LoggerService.debugg("API Res:", res);
    return res;
  }

  logout() {}
}
