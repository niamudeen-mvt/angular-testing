import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit {
  date1 = new Date();
  test$: string = 'test$';
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._apiService
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        if (res.length > 0) {
          const usersList = res.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
          }));

          const columns = Object.keys(usersList[0]);
          this.dataSource.data = usersList;
          this.displayedColumns = columns;
          this.cdr.detectChanges();
        }
      });
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges();
    }
  }
}
