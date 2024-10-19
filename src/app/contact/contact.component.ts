import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
  export class ContactComponent {
    successMessage: string = '';


    onClick(form: NgForm) {
      this.successMessage = 'Thank you for your message! We will get back to you soon.';

      form.reset();
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
  }

  }
