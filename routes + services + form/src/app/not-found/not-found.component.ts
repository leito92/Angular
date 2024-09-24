import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="container text-center p-3">
      <h2>Oops, page not found!</h2>
      <p>The page you're looking for doesn't seem to exist. Let's get you back on track.</p>
    </div>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
