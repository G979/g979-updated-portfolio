import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  onSubmit() {
    // Replace with actual form submission logic
    this.submitted = true;
  }
}

