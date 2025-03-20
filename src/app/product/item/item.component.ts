import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({required: true}) productId!:number;
  @Input() productName!:string;
  @Input() productDetail!:string;
  @Input() productImage!:string;
  @Input() price!:number;
}
