import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToastComponent } from './components/toast/toast.component';
import { TranslationService } from './service/translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private _translate: TranslateService,
    private _translationService: TranslationService
  ) {
    this._translationService.currentLang$.subscribe((lang) => {
      this._translate.use(lang);
    });
    this._translate.setDefaultLang('en');
  }
}
