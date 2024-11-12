import { Injectable } from '@angular/core';

export interface StorageSchema {
  count: number;
}

export type StorageKey = keyof StorageSchema;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  write<T extends StorageKey>(key: T, value: StorageSchema[T]): void {
    window['sessionStorage'].setItem(key, JSON.stringify(value));
  }

  read<T extends StorageKey>(key: T): StorageSchema[T] | null {
    const value = window['sessionStorage'].getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value) as StorageSchema[T];
  }

  remove(key: StorageKey): void {
    window['sessionStorage'].removeItem(key);
  }
}
