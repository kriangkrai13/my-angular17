import { Product, PRODUCTS } from './../products';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ModalComponent } from "./modal/modal.component";
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ItemComponent, CommonModule, ModalComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = PRODUCTS;
  product?:Product;
  isModalVisible = false;
  productSelected(product:Product){
    console.log('Product added to cart with ID: ', product);
    this.product = product;
    this.isModalVisible = true;
  }
}
