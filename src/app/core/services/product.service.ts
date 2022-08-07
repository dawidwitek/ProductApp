import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products$ = new BehaviorSubject<Product[]>([]);

  constructor(private router: Router) {}

  public get products$(): Observable<Product[]> {
    return this._products$.asObservable();
  }

  public formSubmitted(products: Product[]): void {
    this._products$.next(products);
    this.router.navigate(['summary']);
  }

  public clearProductsValue(newValue: []): void {
    this._products$.next(newValue);
  }
}
