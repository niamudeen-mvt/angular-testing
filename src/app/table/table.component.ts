import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { LoaderComponent } from '../components/loader/loader.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, LoaderComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  date1 = new Date();
  test$: string = 'test$';
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  showLoader: boolean = false;
  subscription!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.showLoader = true;

    fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
      res.json().then((res) => {
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
          this.showLoader = false;
          this.cdr.detectChanges();
        }
      });
    });
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
