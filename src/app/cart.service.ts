import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem{
  id:number;
  name:string;
  price:number;
  qty:number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:CartItem[] = [];
  private cart$ = new BehaviorSubject<CartItem[]>(this.cart);
  get cartObservable(){
    return this.cart$.asObservable();
  }
  add(item:CartItem){
    const index = this.cart.findIndex((cartItem)=>cartItem.id === item.id);
    if(index > -1){
      this.cart[index].qty += item.qty;
    }else{
      this.cart.push(item);
    }
    this.cart$.next(this.cart);
  }
  constructor() { }
}
