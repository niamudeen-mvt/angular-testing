import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isFormSubmitted: boolean = false;
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.valid) {
      const { email, password} = this.formGroup.value;

      this._apiService
        .post('http://localhost:7000/signin', {
          email,
          password,
        })
        .subscribe((res: any) => {
          console.log('res: ', res);
          // if (res.token) {
          //   localStorage.setItem('token', res.token);
          //   this.isFormSubmitted = false;
          // }
          this.formGroup.markAsUntouched();
        });

    }
  }
}
