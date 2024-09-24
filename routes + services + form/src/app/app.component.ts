import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container">
          <div class="navbar-nav">
            <a class="nav-link" routerLink="/products" routerLinkActive="active">Products</a>
            <a class="nav-link" routerLink="/add-product" routerLinkActive="active">New Product</a>
          </div>
        </div>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
