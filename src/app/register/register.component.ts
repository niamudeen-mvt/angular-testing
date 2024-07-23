import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastComponent } from '../components/toast/toast.component';
import { ApiService } from '../service/api.service';
import { catchError } from 'rxjs';
import { NotificationService } from '../service/notification.service';

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
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
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
  errorMessage: any = [];
  showToast: boolean = false;
  toast: any;
  constructor(
    private _apiService: ApiService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {}

  onSubmit() {
    const { username, email, password, phone } = this.signupForm.value;

    if (!username || !email || !password || !phone) {
      this._notificationService.showNotification(
        'Please fill all the fields',
        'Warning'
      );
      return false;
    }

    const payload = {
      username,
      email,
      password,
      phone,
    };
    this._apiService
      .post('auth/register', payload)
      .pipe(
        catchError((res: any) => {
          console.log(res);
          if (res?.error?.CODE === 'ALREADY_EXISTS') {
            this._notificationService.showNotification(
              'This email is already registered',
              'Warning'
            );
            return;
          }
          if (res?.error?.errors?.length > 0) {
            this.errorMessage = res?.error?.errors.map(
              (error: any) => error.msg
            );
            this._notificationService.showNotification(
              this.errorMessage[0],
              'Warning'
            );
          }

          return res;
        })
      )
      .subscribe((res: any) => {
        if (res?.CODE === 'SUCCESS') {
          this._notificationService.showNotification(
            'User logged in successfully',
            'Success'
          );
          this.signupForm.reset();
          this._router.navigate(['/dashboard']);
        }
        return res;
      });

    return false;
  }
}
