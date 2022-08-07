import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  @Input() products: Product[] = [];
  public displayedColumns: string[] = ['id', 'name', 'count', 'price'];
  public totalProductsPrice: number = 0;

  constructor() {}

  public ngOnInit(): void {
    this.countItems();
  }

  public countItems(): void {
    this.totalProductsPrice = this.products.reduce(
      (prev, next) => prev + next.count * next.price,
      0
    );
  }
}
