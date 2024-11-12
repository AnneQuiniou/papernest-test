import { Injectable } from '@angular/core';

export interface StorageSchema {
  count: number;
}

type StorageType = 'localStorage' | 'sessionStorage';

export type StorageKey = keyof StorageSchema;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly defaultStorage: StorageType = 'sessionStorage';

  write<T extends StorageKey>(
    key: T,
    value: StorageSchema[T],
    storage = this.defaultStorage,
  ): void {
    window[storage].setItem(key, JSON.stringify(value));
  }

  read<T extends StorageKey>(
    key: T,
    storage = this.defaultStorage,
  ): StorageSchema[T] | null {
    const value = window[storage].getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value) as StorageSchema[T];
  }

  remove(key: StorageKey, storage = this.defaultStorage): void {
    window[storage].removeItem(key);
  }
}
