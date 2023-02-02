import { Storage } from "@/types/storage";

class StorageServiceClass {
  getStorage(type: Storage) {
    switch (type) {
      case "sessionStorage":
        return window.sessionStorage;

      case "localStorage":
        return window.localStorage;
    }
  }

  set(key: string, value: any, type: Storage = "sessionStorage") {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }

    this.getStorage(type).setItem(key, value);
  }

  get(key: string, type: Storage = "sessionStorage") {
    const value: any = this.getStorage(type).getItem(key);

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  remove(key: string, type: Storage = "sessionStorage") {
    this.getStorage(type).removeItem(key);
  }

  destroy(type: Storage = "sessionStorage") {
    this.getStorage(type).clear();
  }
}

export const StorageService = new StorageServiceClass();
