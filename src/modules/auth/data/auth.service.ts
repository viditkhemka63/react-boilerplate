import { ApiService } from "@/common/services/api.service";
import { LoggerService } from "@/common/services/logger.service";
import { APIS } from "@/config/api";

class AuthService {
  static async login(email: string, password: string) {
    const body: any = {
      email,
      password,
    };

    const res: any = await ApiService.post(APIS.LOGIN, body);
    LoggerService.debugg("API Res:", res);
    return res;
  }

  logout() {}
}

export {};
