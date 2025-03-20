import { PRODUCTS } from './../products';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ItemComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = PRODUCTS;
}
