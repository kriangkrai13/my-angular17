import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product} from '../../products';

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
  @Output() selected = new EventEmitter<Product>();
  onPreview() {
    this.selected.emit({
      productId: this.productId,
      productName: this.productName,
      productDetail: this.productDetail,
      productImage: this.productImage,
      price: this.price,
    });
  }

  limitCharacters(text:string, limit:number) {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
}
