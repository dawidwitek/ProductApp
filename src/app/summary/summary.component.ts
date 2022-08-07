import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  companyData: Company = {
    name: '',
    address: '',
    phones: [],
  };

  companySub!: Subscription;
  productsSub!: Subscription;

  constructor(
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.productsSub = this.productService.products$.subscribe(
      (data) => (this.products = data)
    );

    this.companySub = this.companyService
      .getCompanyData()
      .subscribe((data) => (this.companyData = data));
  }

  ngOnDestroy(): void {}
}
