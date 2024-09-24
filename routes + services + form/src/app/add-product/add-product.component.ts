import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiProductService } from '../services/api-product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="container">
      <form [formGroup]="formContact" (submit)="handleSubmit()">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" 
           id="name"
           formControlName="name" 
           [class.is-invalid]="name.invalid && name.touched"/>
           <div  class="invalid-feedback">
            Please provide a name.
           </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" 
           id="description"
           formControlName="description"
           [class.is-invalid]="description.invalid && description.touched"></textarea>
           <div  class="invalid-feedback">
            Please provide a description.
           </div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" 
           id="price"
           formControlName="price"
           [class.is-invalid]="price.invalid && price.touched"/>
           <div  class="invalid-feedback">
            Please provide a price.
           </div>
        </div>
        <div class="mb-3">
          <label for="sku" class="form-label">SKU</label>
          <input type="text" class="form-control" 
           id="sku"
           formControlName="sku"
           [class.is-invalid]="sku.invalid && sku.touched"/>
           <div  class="invalid-feedback">
            Please provide a SKU.
           </div>
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" class="form-control" 
           id="stock"
           formControlName="stock"
           [class.is-invalid]="stock.invalid && stock.touched"/>
           <div  class="invalid-feedback">
            Please provide a stock.
           </div>
        </div>
        <div class="col-12 text-end">
          <button type="submit" class="btn btn-primary"
           [disabled]="formContact.invalid">
            Add
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  private arraySize: number = 0;
  constructor(private router: Router, private apiProduct: ApiProductService) {}
  formContact = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    sku: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  })

  get name() {
    return this.formContact.get('name') as FormControl
  }
  get description() {
    return this.formContact.get('description') as FormControl
  }
  get price() {
    return this.formContact.get('price') as FormControl
  }
  get sku() {
    return this.formContact.get('sku') as FormControl
  }
  get stock() {
    return this.formContact.get('stock') as FormControl
  }

  handleSubmit() {
    const form = {
      id: String(Math.floor(Math.random() * 99999) + 5),
      name: this.name.value,
      info: {
        description: this.description.value,
        price: this.price.value,
        sku: this.sku.value,
        stock: this.stock.value
      }
    }
    this.apiProduct.addProduct(form).subscribe({
      next: (response) => {
        this.router.navigate([''])
      },
      error: (error) => {
        alert(error)
      }
    })
  }
}
