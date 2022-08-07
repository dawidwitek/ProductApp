import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>([]);
  public products$ = this.products.asObservable();

  private isAllowed = new BehaviorSubject<boolean>(false);
  public isAllowed$ = this.isAllowed.asObservable();

  formSubmitted(products: Product[]) {
    this.products.next(products);
    this.router.navigate(['summary']);
    this.isAllowed.next(true);
  }

  constructor(private router: Router) {}
}
