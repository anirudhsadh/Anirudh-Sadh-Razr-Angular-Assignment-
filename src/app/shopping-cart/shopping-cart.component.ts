import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent  {

  items: any[] = [];
  totalAmount: number = 0;
  showPopup: boolean = false;
  popupMessage: string = '';
  selectedItemsCount: number = 0;

  constructor(private http: HttpClient,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log("in he shopping list")
    this.items = this.productService.getItems();
    this.calculateTotalAmount();
    this.route.queryParams.subscribe(params => {
      this.selectedItemsCount = +params['count'] || 0;
    });
  }

  removeFromCart(item: any) {
    this.productService.decrimentSelectedItemsCount();
    this.productService.removeFromCart(item);
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  checkout() {
    if (this.items.length === 0) {
      this.popupMessage = 'Your cart is empty.';
    } else {
      // Make API call here to send the data in commented code 
      // this.http.post('your-payment-api-url', this.items).subscribe(
      //   (response) => {
      //   },
      //   (error) => {
      //     // Handle the error response from the API
      //   });
  
      this.popupMessage = 'Your order is placed.';
    }
    
    this.showPopup = true;
    this.productService.zeroSelectedItemsCount();
    this.productService.clearCart();

  }
  
  closePopup() {
    this.showPopup = false;
    this.router.navigate(['/']);
  }

  goBackToHome(): void {
    this.router.navigate(['/'], { queryParams: { count: this.selectedItemsCount } });
  }
 
}
