import { Injectable } from '@angular/core';
import { Option } from '../../types';

@Injectable({
  providedIn: 'root',
})

/**
 * Util service
 */
export class UtilsService {
  constructor() {}

  /**
   * Capitalize first letter and lowercase rest of given value
   * @param value
   * @returns
   */
  capitalizeFirstLetter = (value: string) => {
    return value[0].toUpperCase() + value.slice(1)?.toLowerCase();
  };

  /**
   * Generate array of key value object from given object to use in select input
   * @param obj
   * @returns
   */
  generateOptionKeyValue = <T>(obj: T): Option[] => {
    if (obj === undefined || obj === null || typeof obj !== 'object') {
      return [];
    }
    return Object.values(obj)?.map((value) => {
      return { label: this.capitalizeFirstLetter(value), value };
    });
  };
}
