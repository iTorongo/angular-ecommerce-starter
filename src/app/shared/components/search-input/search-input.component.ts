import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IconType } from '../../../core/enums/icons.enum';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  readonly IconType = IconType;
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
