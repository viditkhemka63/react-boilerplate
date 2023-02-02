const DEBUG = "DEBUG";
const INFO = "INFO";
const WARNING = "WARNING";
const ERROR = "ERROR";

const _allowed_log_types: any = {
  DEBUG: [DEBUG, INFO, WARNING, ERROR],
  INFO: [INFO, WARNING, ERROR],
  WARNING: [WARNING, ERROR],
  ERROR: [ERROR],
  VERBOSE: [DEBUG, INFO, WARNING, ERROR],
};

const getLogger: any = {
  [DEBUG]: (message: string) => console.log(message),
  [INFO]: (message: string) => console.info(message),
  [WARNING]: (message: string) => console.warn(message),
  [ERROR]: (message: string) => console.error(message),
};

class LoggerServiceClass {
  constructor(private level: string) {}

  private _log(level: string, message: string, stack: any) {
    if (_allowed_log_types[this.level].indexOf(level) !== -1) {
      this._write(level, this._format(level, message, stack));
    }
  }

  private _write(level: string, message: string) {
    getLogger[level](message);
  }

  private _format(level: string, message: any, stack: any = null): string {
    if (stack) {
      message = stack;
    }

    if (!message) {
      return "";
    }

    if (level == "DEBUG") return message;

    if (typeof message === "object") {
      message = JSON.stringify(message);
    }

    if (typeof message !== "string" && typeof message.message !== "undefined") {
      message = message.toString();
    }

    return `${level}: ${message}`;
  }

  error(message: any, stack: any = null) {
    this._log(ERROR, message, stack);
  }

  info(message: any, stack: any = null) {
    this._log(INFO, message, stack);
  }

  warn(message: any, stack: any = null) {
    this._log(WARNING, message, stack);
  }

  debugg(message: any, stack: any = null) {
    this._log(DEBUG, message, stack);
  }
}

export const LoggerService = new LoggerServiceClass("VERBOSE");
