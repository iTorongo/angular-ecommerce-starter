import { Pipe, PipeTransform } from '@angular/core';

/**
 * Sort pipe to order list of objects based on field name
 */
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform<T>(items: T[], sortByField: string): T[] {
    if (!items.length) {
      return [];
    }
    if (!sortByField) {
      return items;
    }

    const sortByFieldType = sortByField as keyof T;

    return [...items]?.sort((first: T, second: T) => {
      if (first[sortByFieldType] < second[sortByFieldType]) {
        return -1;
      } else if (first[sortByFieldType] > second[sortByFieldType]) {
        return 1;
      }
      return 0;
    });
  }
}
