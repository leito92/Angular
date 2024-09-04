import { Component, Input } from '@angular/core';
import { product } from '../types/types';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col">
          <ol class="list-group list-group-numbered">
          @for(product of productList; track product.id) {
            <button (click)="onProductClicked(product.id)" 
            type="button" 
            class="list-group-item list-group-item-action">
              {{product.name}}
            </button>
          }
          </ol>
        </div>
        <div class="col-sm-8">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() productList: product[] | null = []
  constructor(private router: Router) {}
  onProductClicked(productId: string | undefined): void {
    this.router.navigate(['/product', productId])
  }
}
