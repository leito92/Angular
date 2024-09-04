import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="container">
      <form [formGroup]="formContact" (submit)="handleSubmit()">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" 
           id="email"
           formControlName="email" 
           [class.is-invalid]="email.invalid && email.touched"/>
           <div  class="invalid-feedback">
            Please provide a valid email.
           </div>
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label">Subject</label>
          <input type="text" class="form-control" 
           id="subject"
           formControlName="subject"
           [class.is-invalid]="subject.invalid && subject.touched"/>
           <div  class="invalid-feedback">
            Please provide a subject.
           </div>
        </div>
        <div class="mb-3">
          <label for="text" class="form-label">Text</label>
          <textarea class="form-control" 
           id="text"
           formControlName="text"
           [class.is-invalid]="text.invalid && text.touched"></textarea>
           <div  class="invalid-feedback">
            Please provide a text.
           </div>
        </div>
        <div class="col-12 text-end">
          <button type="submit" class="btn btn-primary"
           [disabled]="formContact.invalid">
            Send
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router: Router) {}
  formContact = new FormGroup({
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  })

  get email() {
    return this.formContact.get('email') as FormControl
  }
  get subject() {
    return this.formContact.get('subject') as FormControl
  }
  get text() {
    return this.formContact.get('text') as FormControl
  }

  handleSubmit() {
    if (this.formContact.invalid) return;
    const form = {
      email: this.email.value,
      subject: this.subject.value,
      text: this.text.value
    }
    alert(JSON.stringify(form))
    this.router.navigate([''])
  }
}
