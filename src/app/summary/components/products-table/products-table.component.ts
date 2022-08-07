import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  @Input() public products: Product[] = [];
  public displayedColumns: string[] = ['id', 'name', 'count', 'price'];
  public totalProductsPrice: number = 0;

  public ngOnInit(): void {
    this.countItems();
  }

  public countItems(): void {
    this.totalProductsPrice = this.products.reduce(
      (prev: number, next: Product) => prev + next.count * next.price,
      0
    );
  }
}
