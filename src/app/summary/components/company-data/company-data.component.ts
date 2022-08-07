import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Company } from 'src/app/core/models/company.interface';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss'],
})
export class CompanyDataComponent implements OnChanges {
  @Input() public companyData: Company;
  public companyPhones: string = '';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.companyData) {
      this.companyPhones = this.companyData.phones.join(', ');
    }
  }
}
