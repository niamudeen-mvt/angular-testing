import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastComponent } from '../components/toast/toast.component';
import { ToastService } from '../service/toast.service';
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
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _cd: ChangeDetectorRef,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.valid) {
      const { email, password } = this.formGroup.value;

      const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
      if (currentUser.email === email && currentUser.password === password) {
        this._authService.isLoggedIn.next(true);
        localStorage.setItem('isLoggedIn', 'true');
        this._cd.detectChanges();
        this.formGroup.reset();
        this._router.navigate(['/dashboard']);

        this._toastService.showToast.next(false);
      } else {
        this._toastService.showToast.next(true);
      }
    }
    console.log('this.showToast: ', this.showToast);
  }
}
