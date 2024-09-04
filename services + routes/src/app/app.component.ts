import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiProductService } from './services/api-product.service';
import { Observable } from 'rxjs';
import { product } from './types/types';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ProductListComponent],
  template: `
    <div class="container">
      <h1>Products</h1>
      @if(productList$ | async; as productList) {
        <app-product-list [productList]="productList" />
      }@else {
        <p>Loading..</p>
      }
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //resultado de la petición http
  public productList$!: Observable<product[]>
  //servicio
  constructor(private apiProduct: ApiProductService) {}
  //al montar el componente se llama el servicio y se guarda
  ngOnInit(): void {
    this.productList$ = this.apiProduct.getAll()
  }
}
