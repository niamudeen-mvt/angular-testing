import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  signupForm: any;

  signupFormArray: any[] = [
    {
      name: 'username',
    },
    {
      name: 'email',
    },
    {
      name: 'password',
    },
    {
      name: 'phone',
    },
  ];

  onSubmit(singupForm: any) {
    if (singupForm.valid) {
      console.log('singupForm Submitted', singupForm.value);
    } else {
    }
  }
}
