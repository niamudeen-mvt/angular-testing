import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { Router, RouterLink } from '@angular/router';
import { ToastComponent } from '../components/toast/toast.component';
import { NotificationService } from '../service/notification.service';
import { ApiService } from '../service/api.service';
import { catchError } from 'rxjs';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    RouterLink,
    ToastComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isFormSubmitted: boolean = false;
  showToast: boolean = false;
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  errorMessage: any = [];
  constructor(
    private _router: Router,
    private _notificationService: NotificationService,
    private _apiService: ApiService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { email, password } = this.formGroup.value;

    if (!email || !password) {
      this._notificationService.showNotification(
        'Please fill all the fields',
        'Warning'
      );
      return true;
    }

    this._apiService
      .post('auth/login', { email, password })
      .pipe(
        catchError((res: any) => {
          console.log(res);

          if (res.error.CODE === 'INVALID_CREDENTIALS') {
            this._notificationService.showNotification(
              'Please provide valid credentials',
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
          localStorage.setItem('isLoggedIn', 'true');
          this._authService.isLoggedIn.next(true);
          this._router.navigate(['/dashboard']);
          this._notificationService.showNotification(
            'User logged in successfully',
            'Success'
          );
          this.formGroup.reset();
        }
        return res;
      });

    return true;
  }
}
