import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Company } from '../core/models/Company';
import { Product } from '../core/models/Product';
import { CompanyService } from '../core/services/company.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  companyData$: Observable<Company>;
  productsSub: Subscription;

  constructor(
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.productsSub = this.productService.products$.subscribe(
      (data: Product[]) => (this.products = data)
    );
    this.companyData$ = this.companyService.getCompanyData();
  }

  ngOnDestroy(): void {
    this.productService.clearProductsValue([]);
    this.productsSub.unsubscribe();
  }
}
