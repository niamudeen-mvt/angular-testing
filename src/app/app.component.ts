import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastComponent } from './components/toast/toast.component';
import { TranslateService } from '@ngx-translate/core';
import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, RouterLink,HeaderComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private translate: TranslateService, private lang : CounterService) {
    
    this.lang.currentLang$.subscribe((el)=>{
      translate.use(el)
    })
    translate.setDefaultLang('en');
  }
}
