import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../service/toast.service';
import { ToastComponent } from '../components/toast/toast.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ToastComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isFormSubmitted: boolean = false;
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });

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
  errorMessage: any = {
    required: 'This field is required',
    email: 'The email is not valid',
    password: 'Password must contain at least 3 characters',
    phone: 'Phone number must contain at least 10 characters',
  };
  showToast: boolean = false;
  constructor(private router: Router, private _toastService: ToastService) {}

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.signupForm.valid) {
      const { username, email, password, phone } = this.signupForm.value;
      const currentUser = {
        username,
        email,
        password,
        phone,
      };
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      if (user.email === email) {
        this._toastService.showToast.next(true);
      } else {
        this._toastService.showToast.next(false);
        localStorage.setItem('user', JSON.stringify(currentUser));
        this.router.navigate(['/login']);
        this.isFormSubmitted = false;
        this.signupForm.reset();
      }
    }
  }
}
