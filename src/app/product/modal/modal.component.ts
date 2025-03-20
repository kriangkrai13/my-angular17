import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../products';

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() product?:Product
  @Input() isModalVisible = false;
  @Output() closeModal = new EventEmitter<void>();
  onCloseModal() {
    console.log('Modal closed.');
    this.closeModal.emit();
  }

  addToCart() {
    console.log(`${this.product?.productId} added to cart.`);
  }
}
