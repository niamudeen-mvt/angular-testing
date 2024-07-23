import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  isLoggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') ? true : false
  );
  constructor(private _router: Router) {}

  ngOnInit() {}
}
