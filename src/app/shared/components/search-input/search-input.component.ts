import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IconType } from '../../../core/enums/icons.enum';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  readonly IconType = IconType;
  @Output() search: EventEmitter<string> = new EventEmitter();

  private subscription!: Subscription;

  searchQuery = new FormControl('');

  constructor(protected route: ActivatedRoute, protected router: Router) {}

  ngOnInit() {
    this.subscription = this.searchQuery.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.search.emit(value ?? '');
        this.syncSearchWithQueryParam(value);
      });

    this.syncQueryParamWithSearch();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClearSearch() {
    this.searchQuery.reset();
  }

  syncSearchWithQueryParam(value: string | null): void {
    const params: Params = [];
    params['search'] = value;
    this.router.navigate(['products'], {
      queryParams: !!value ? params : [],
      replaceUrl: true,
    });
  }

  syncQueryParamWithSearch(): void {
    const params: Params = this.route.snapshot.queryParams;
    if (Object.keys(params).length === 0) {
      return;
    }
    this.searchQuery.setValue(Object.values(params)[0]);
  }
}
