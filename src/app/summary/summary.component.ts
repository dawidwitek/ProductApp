import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Company } from '../core/models/company.interface';
import { Product } from '../core/models/product.interface';
import { CompanyService } from '../core/services/company.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, OnDestroy {
  public products: Product[] = [];

  public companyData$: Observable<Company>;
  public productsSub: Subscription;

  constructor(
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  public ngOnInit(): void {
    this.productsSub = this.productService.products$.subscribe(
      (data: Product[]) => (this.products = data)
    );
    this.companyData$ = this.companyService.getCompanyData();
  }

  public ngOnDestroy(): void {
    this.productService.clearProductsValue();
    this.productsSub.unsubscribe();
  }
}
