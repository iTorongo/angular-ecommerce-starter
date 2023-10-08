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

  /**
   * Emit search value to parent component
   */
  @Output() search: EventEmitter<string> = new EventEmitter();

  /**
   * Store subscriptions to destroy
   */
  private subscription!: Subscription;

  /**
   * Search query as form control
   */
  searchQuery = new FormControl('');

  /**
   * Constructor
   * @param route
   * @param router
   */
  constructor(protected route: ActivatedRoute, protected router: Router) {}

  /**
   * On init listen to change search query value and fire emitter
   */
  ngOnInit() {
    this.subscription = this.searchQuery.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.search.emit(value ?? '');
        this.syncSearchWithQueryParam(value);
      });

    this.syncQueryParamWithSearch();
  }

  /**
   * Unsubscribe on destroy
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Clear search field
   */
  onClearSearch() {
    this.searchQuery.reset();
  }

  /**
   * Sync provided search value with url
   * @param value
   */
  syncSearchWithQueryParam(value: string | null): void {
    const params: Params = [];
    params['search'] = value;
    this.router.navigate(['products'], {
      queryParams: !!value ? params : [],
      replaceUrl: true,
    });
  }

  /**
   * Sync search value from url if exists
   * @returns
   */
  syncQueryParamWithSearch(): void {
    const params: Params = this.route.snapshot.queryParams;
    if (Object.keys(params).length === 0) {
      return;
    }
    this.searchQuery.setValue(Object.values(params)[0]);
  }
}
