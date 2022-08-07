import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  @Input() products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'count', 'price'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.countItems();
  }

  countItems() {
    return this.products.reduce(
      (prev, next) => prev + next.count * next.price,
      0
    );
  }
}
