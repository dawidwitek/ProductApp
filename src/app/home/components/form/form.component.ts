import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { FormGroupKey } from 'src/app/core/enums/FormGroupKey.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public FormGroupKey: typeof FormGroupKey = FormGroupKey;

  private regexPattern: string = '^0*?[1-9]\\d*$'; // Positive integer numbers including 0

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.onAddProduct();
  }

  public initForm(): void {
    this.form = this.fb.group({
      products: this.fb.array([]),
    });
  }

  public get products(): FormArray {
    return this.form.get(FormGroupKey.PRODUCTS) as FormArray;
  }

  public get productControls(): FormControl[] {
    return (this.form.get(FormGroupKey.PRODUCTS) as FormArray)
      .controls as FormControl[];
  }

  public onAddProduct(): void {
    const productsForm = this.fb.group({
      [FormGroupKey.NAME]: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      [FormGroupKey.COUNT]: [
        '',
        [
          Validators.required,
          Validators.pattern(this.regexPattern),
          Validators.min(1),
          Validators.max(100),
        ],
      ],
      [FormGroupKey.PRICE]: [
        '',
        [
          Validators.required,
          Validators.pattern(this.regexPattern),
          Validators.min(1),
          Validators.max(1000000),
        ],
      ],
    });

    this.products.push(productsForm);
  }

  public onDeleteProduct(index: number): void {
    this.products.removeAt(index);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.productService.formSubmitted(
        this.form.get(FormGroupKey.PRODUCTS).value
      );
      return;
    }
    this.form.markAllAsTouched();
  }
}
