import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  user: any = {};

  userId: any = localStorage.getItem('userId');
  constructor(private _apiService: ApiService) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    if (this.userId) {
      this._apiService
        .get(`auth/user/${this.userId}`)
        .pipe(
          catchError((res: any) => {
            return res;
          })
        )
        .subscribe((res: any) => {
          if (res?.CODE === 'SUCCESS') {
            this.user = res?.user;
          }
          return res;
        });
    }
  }
}
