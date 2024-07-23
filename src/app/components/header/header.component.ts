import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
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

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this.navMenu = routes;

    this._authService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this._router.navigate(['/login']);
    this._authService.isLoggedIn.next(false);
  }
}
