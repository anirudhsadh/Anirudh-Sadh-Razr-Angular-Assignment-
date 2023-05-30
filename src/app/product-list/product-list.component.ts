import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent  {

  productCount: any = 0;
  searchQuery: string = '';
  
  products: any[] = [
    { id: 1, name: 'Iphone 11', price: 2000 ,imageUrl:'../assets/image1.JPG' , details :'256GB'},
    { id: 2, name: 'Samsung G11', price: 4000 ,imageUrl:'../assets/image1.jpg', details :'256GB'},
    { id: 3, name: 'MI 22', price: 6000 ,imageUrl:'../assets/image1.JPG', details :'256GB'},
    { id: 4, name: 'Redmi C22', price: 8000 ,imageUrl:'../assets/image1.jpg', details :'256GB'}
  ];
  searchedProductsI:any=this.products;

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute){ }
  
  ngOnInit(): void {
    this.productCount  = this.productService.getSelectedItemsCount();
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
    let temp = [] ;
    this.productService.incrementSelectedItemsCount();
    this.productCount  = this.productService.getSelectedItemsCount();
  }

  searchProducts(): void {    
    const filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(this.searchQuery));
    this.searchedProductsI = filteredProducts;
  }


}
