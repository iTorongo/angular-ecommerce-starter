import { Injectable } from '@angular/core';
import { Option } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  capitalizeFirstLetter = (value: string) => {
    return value[0].toUpperCase() + value.slice(1);
  };

  generateOptionKeyValue = <T>(obj: T): Option[] => {
    if (obj === undefined || obj === null || typeof obj !== 'object') {
      return [];
    }
    return Object.values(obj)?.map((value) => {
      return { label: this.capitalizeFirstLetter(value), value };
    });
  };
}
