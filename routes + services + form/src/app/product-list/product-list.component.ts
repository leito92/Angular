import { Component, Input, OnInit } from '@angular/core';
import { product } from '../types/types';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ApiProductService } from '../services/api-product.service';
import { filter, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col">
          @if(productList$ | async; as productList) {
            <ol class="list-group list-group-numbered">
            @for(product of productList; track product.id) {
              <button (click)="onProductClicked(product.id)" 
              type="button" 
              class="list-group-item list-group-item-action"
              [class.active]="product.id === selectedProductId">
                {{product.name}}
              </button>
            }
            </ol>
          }@else {
            <p>Loading..</p>
          }
        </div>
        <div class="col-sm-8">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public productList$!: Observable<product[]>
  public selectedProductId: string | undefined;
  constructor(private apiProduct: ApiProductService, private router: Router) {}
  ngOnInit(): void {
      this.productList$ = this.apiProduct.getAll()
      this.selectedProductId = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
  }
  onProductClicked(productId: string | undefined): void {
    this.selectedProductId = productId
    this.router.navigate(['/products', productId])
  }
}
