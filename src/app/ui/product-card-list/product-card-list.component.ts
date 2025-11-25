import { Component } from '@angular/core';
import { ProductCardComponent } from '@ui/product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css',
})
export class ProductCardListComponent {}
