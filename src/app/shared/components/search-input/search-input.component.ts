import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faCircleXmark = faCircleXmark;
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchQuery = new FormControl('');

  ngOnInit() {
    this.searchQuery.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => this.search.emit(value ?? ''));
  }

  onClearSearch() {
    this.searchQuery.reset();
  }
}
