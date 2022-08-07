import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
  AbstractControl,
  Form,
} from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    products: this.fb.array([]),
  });

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onAddProduct();
  }

  get products() {
    return this.form.controls['products'] as FormArray;
  }

  onChange(event: any) {}

  get productControls() {
    return (this.form.controls['products'] as FormArray)
      .controls as FormGroup[];
  }

  onAddProduct() {
    const productsForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      count: [
        '',
        [
          Validators.required,
          Validators.pattern('^0*?[1-9]\\d*$'), // Positive integer numbers including 0
          Validators.min(1),
          Validators.max(100),
        ],
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.pattern('^0*?[1-9]\\d*$'), // Positive integer numbers including 0
          Validators.min(1),
          Validators.max(1000000),
        ],
      ],
    });

    this.products.push(productsForm);
  }

  onDeleteProduct(index: number) {
    this.products.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      this.productService.formSubmitted(this.form.controls['products'].value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get name() {
    return this.form.get('products.name');
  }
}
