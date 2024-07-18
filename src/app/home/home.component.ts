import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDatePipe } from '../custom-date.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CustomDatePipe, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  date1 = new Date();

  test$: string = 'test$';

  constructor(private translate: CounterService) {}

  selectedChange(event: any) {
    this.translate.currentLang$.next(event.target.value);
  }

  // send data from component to view
  // string interpolation
  //
}
