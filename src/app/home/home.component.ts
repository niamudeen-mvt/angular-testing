import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomDatePipe } from '../custom-date.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../table/table.component';
import { TranslationService } from '../service/translate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CustomDatePipe,
    TranslateModule,
    MatTableModule,
    MatPaginatorModule,
    TableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  date1 = new Date();

  constructor(private _translate: TranslationService) {}

  selectedChange(event: any) {
    this._translate.currentLang$.next(event.target.value);
  }
}
