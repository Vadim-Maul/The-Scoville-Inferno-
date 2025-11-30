import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FilterService } from '@app/data/services/filter.service';

import { CamelCaseToSpacesPipe } from '@app/helpers/pipes/camel-case-to-spaces.pipe';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-filter-menu',
  imports: [ReactiveFormsModule, CamelCaseToSpacesPipe, LowerCasePipe],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css',
})
export class FilterMenuComponent implements OnInit {
  filterForm = new FormGroup({
    productTypes: new FormGroup({
      wholeChilies: new FormControl<boolean>(false, { nonNullable: true }),
      groundSpices: new FormControl<boolean>(false, { nonNullable: true }),
      scorchingSauces: new FormControl<boolean>(false, { nonNullable: true }),
      sadisticBlends: new FormControl<boolean>(false, { nonNullable: true }),
      infernalExtracts: new FormControl<boolean>(false, { nonNullable: true }),
    }),

    agonyLevels: new FormGroup({
      warmingUp: new FormControl<boolean>(false, { nonNullable: true }),
      seriousHeat: new FormControl<boolean>(false, { nonNullable: true }),
      ringOfFire: new FormControl<boolean>(false, { nonNullable: true }),
      legalWeapon: new FormControl<boolean>(false, { nonNullable: true }),
    }),
  });
  private filterService = inject(FilterService);
  private destroyRef = inject(DestroyRef);
  products = signal<string[]>([]);
  agony = signal<string[]>([]);

  ngOnInit(): void {
    const initialFilters = this.filterService.filters();

    this.filterForm.patchValue(
      {
        productTypes: this.keysToMap(initialFilters.products),
        agonyLevels: this.keysToMap(initialFilters.agony),
      },
      { emitEvent: false },
    );
    this.filterForm.valueChanges
      .pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        const products = this.getTrueKeys(value.productTypes);
        const agony = this.getTrueKeys(value.agonyLevels);
        this.products.set(products);
        this.agony.set(agony);
        this.filterService.updateUrl({ products, agony });
      });
  }

  private getTrueKeys(obj: Record<string, boolean | undefined> = {}): string[] {
    return Object.keys(obj).filter((key) => obj[key] === true);
  }

  private keysToMap(keys: string[]): Record<string, boolean> {
    return keys.reduce((acc, key) => ({ ...acc, [key]: true }), {});
  }
}
