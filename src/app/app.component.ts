import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToastComponent } from './components/toast/toast.component';
import { TranslationService } from './service/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { publicRoutes, routes } from './app.routes';
import { AuthGuard } from './service/auth-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    ToastComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  showHeader: boolean = false;
  currentHandle: string = window.location.pathname.split('/')[1];

  constructor(
    private _translate: TranslateService,
    private _translationService: TranslationService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) {
    this._translationService.currentLang$.subscribe((lang) => {
      this._translate.use(lang);
    });
    this._translate.setDefaultLang('en');

    this._authGuard.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn && publicRoutes.includes(this.currentHandle)) {
        this._router.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const currentHandle = this._router.url.split('/')[1];
        this.showHeader = routes
          .map((route: any) => route.path)
          .includes(currentHandle);
      }
    });
  }
}
