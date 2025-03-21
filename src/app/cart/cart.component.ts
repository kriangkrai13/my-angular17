import { Component } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  carts : CartItem[] = [];
  constructor(private cartService:CartService){};
  
  private cartSubscription!:Subscription;
  ngOnInit(){
    this.cartService.cartObservable.subscribe({
      next:(res)=>{
        this.carts = res;
      },
      error:(err)=>{
        console.log('Cart Component >> ', err);
      }
    });
  }

  ngOnDestroy(){
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe(); 
    }
  }
}
