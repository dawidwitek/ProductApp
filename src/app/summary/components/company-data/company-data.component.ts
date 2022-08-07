import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Company } from 'src/app/core/models/Company';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss'],
})
export class CompanyDataComponent implements OnInit, OnChanges {
  @Input() companyData: Company;
  public companyPhones: string = '';

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.companyData) {
      this.companyPhones = this.companyData.phones.join(', ');
    }
  }

  public ngOnInit(): void {}
}
