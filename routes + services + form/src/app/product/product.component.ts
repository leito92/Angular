import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../types/types';
import { ApiProductService } from '../services/api-product.service';
import { AsyncPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe],
  template: `
    <div class="card">
      <div class="card-body">
      @if (product$ | async; as product) {
        @for(info of (product.info | keyvalue); track info) {
          <h5 class="card-title">{{ info.key }}:</h5>
          <p class="card-text">{{ info.value }}</p>
        }
      }@else {
        <p>Loading..</p>
      }
      </div>
    </div>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
  public product$!: Observable<product>
  constructor(private apiProduct: ApiProductService) {}
  @Input('id') productId!: string
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productId']) {
      this.product$ = this.apiProduct.getProduct(this.productId)
    }
  }
}
