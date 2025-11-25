import { Component } from '@angular/core';
import { ProductCardListComponent } from '@ui/product-card-list/product-card-list.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductCardListComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
