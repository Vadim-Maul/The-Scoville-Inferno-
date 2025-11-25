import { Component, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, CurrencyPipe],
  //just an example, for learning purposes it's not needed to set the default currency here
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {}
