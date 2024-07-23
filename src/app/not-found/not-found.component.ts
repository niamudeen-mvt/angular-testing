import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  goBack() {
    this._authService.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this._router.navigate(['/dashboard']);
      } else {
        this._router.navigate(['/login']);
      }
    });
  }
}
