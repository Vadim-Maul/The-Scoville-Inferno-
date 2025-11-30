import { Component } from '@angular/core';
import { FilterMenuComponent } from '@app/home/components/filter-menu/filter-menu.component';
import { ProductCardListComponent } from '@app/home/components/product-card-list/product-card-list.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FilterMenuComponent, NgOptimizedImage, ProductCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
