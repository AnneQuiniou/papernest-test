import { Injectable } from '@angular/core';

export interface StorageSchema {
  count: number;
}

export type StorageKey = keyof StorageSchema;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * Write a key value pair to the session storage
   *
   * @template T
   * @param {T} key the key value for the session storage
   * @param {StorageSchema[T]} value the value to write in the session storage
   * @memberof StorageService
   */
  write<T extends StorageKey>(key: T, value: StorageSchema[T]): void {
    window['sessionStorage'].setItem(key, JSON.stringify(value));
  }

  /**
   * Base on key provided, return parsed corresponding value in session storage or null
   *
   * @template T
   * @param {T} key
   * @return {*}  {(StorageSchema[T] | null)}
   * @memberof StorageService
   */
  read<T extends StorageKey>(key: T): StorageSchema[T] | null {
    const value = window['sessionStorage'].getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value) as StorageSchema[T];
  }

  /**
   * Remove stored key value pair from session storage
   *
   * @param {StorageKey} key
   */
  remove(key: StorageKey): void {
    window['sessionStorage'].removeItem(key);
  }
}
