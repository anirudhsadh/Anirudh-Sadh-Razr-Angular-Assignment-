import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  
  productCount: any = 0;
  isCollapsed = false;
  constructor( private productService: ProductService){ }
  ngOnInit(): void {
    this.productService.headerRefreshed.subscribe(() => {
      this.productCount  = this.productService.getSelectedItemsCount();
    });
  }

  toggleNavbar() {
      this.isCollapsed = !this.isCollapsed;
    }  
}
