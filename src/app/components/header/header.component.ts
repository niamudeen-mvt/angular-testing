import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../service/auth-guard.service';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  navMenu: any = [];
  isLoggedIn: boolean = false;
  protectedRoutes = ['dashboard'];
  publicRoutes = ['', 'register', 'login'];

  constructor(private _authGuard: AuthGuard, private _router: Router) {}

  ngOnInit() {
    this.navMenu = routes;

    this._authGuard.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this._router.navigate(['/login']);
    this._authGuard.isLoggedIn.next(false);
  }
}
