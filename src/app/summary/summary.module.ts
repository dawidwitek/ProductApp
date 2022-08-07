import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';
import { CompanyDataComponent } from './components/company-data/company-data.component';

@NgModule({
  declarations: [
    SummaryComponent,
    ProductsTableComponent,
    CompanyDataComponent,
  ],
  imports: [CommonModule, SummaryRoutingModule, MatTableModule],
})
export class SummaryModule {}
