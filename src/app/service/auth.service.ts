import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') ? true : false
  );
  constructor(private _router: Router) {}
}
