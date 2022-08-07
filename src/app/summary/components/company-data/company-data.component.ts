import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/Company';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss'],
})
export class CompanyDataComponent implements OnInit {
  @Input() companyData!: Company;

  constructor() {}

  ngOnInit(): void {}

  joinPhones() {
    return this.companyData.phones.join(', ');
  }
}
