import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private selectedItemsCount: number = 0;
  items: any[] = [];

  // Event emitter to notify the header component
  headerRefreshed: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) { }
  
  incrementSelectedItemsCount(): void {
    this.selectedItemsCount++;
    this.headerRefreshed.emit();
  }
  decrimentSelectedItemsCount(): void {
    this.selectedItemsCount--;
    this.headerRefreshed.emit();
  }
  zeroSelectedItemsCount(): void {
    this.selectedItemsCount=0;
    this.headerRefreshed.emit();
  }
  getSelectedItemsCount(): number {
    return this.selectedItemsCount;
  }


  addToCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }
  
  removeFromCart(item: any) {
    const index = this.items.findIndex(cartItem => cartItem.id === item.id);

    if (index !== -1) {
      if (this.items[index].quantity > 1) {
        this.items[index].quantity -= 1;
      } else {
        this.items.splice(index, 1);
      }
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

}
