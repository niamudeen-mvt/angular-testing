import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements OnInit, CanActivate {
  isLoggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') ? true : false
  );
  constructor(private _router: Router) {}

  ngOnInit() {}

  canActivate(): any {
    if (this.isLoggedIn.value) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
