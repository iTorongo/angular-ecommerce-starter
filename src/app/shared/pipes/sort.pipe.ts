import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform<T>(items: T[], sortByField: keyof T): T[] {
    if (!items.length) {
      return [];
    }
    if (!sortByField) {
      return items;
    }
    return [...items]?.sort((first: T, second: T) => {
      if (first[sortByField] < second[sortByField]) {
        return -1;
      } else if (first[sortByField] > second[sortByField]) {
        return 1;
      }
      return 0;
    });
  }
}
