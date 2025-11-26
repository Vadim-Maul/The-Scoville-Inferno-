import { inject, Injectable, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ActiveFilters } from '@app/data/interfaces/filter.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly filters: Signal<ActiveFilters> = toSignal(
    this.route.queryParams.pipe(
      map((params) => ({
        products: params['products'] ? params['products'].split(',') : [],
        agony: params['agony'] ? params['agony'].split(',') : [],
      })),
    ),
    { initialValue: { products: [], agony: [] } },
  );

  updateUrl(filters: ActiveFilters) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        products: filters.products.length
          ? filters.products.join(',')
          : undefined,
        agony: filters.agony.length ? filters.agony.join(',') : undefined,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
