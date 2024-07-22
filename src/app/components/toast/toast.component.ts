import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent implements OnInit {
  @Input() title: string = 'toast';
  @Input() desc: string = 'desc';
  @Input() accept: string = '';
  @Input() cancel: string = '';

  isShow: boolean = false;
  constructor(private _toastService: ToastService) {
    this._toastService.showToast.subscribe((isShow) => {
      this.isShow = isShow;
    });
  }
  ngOnInit(): void {}

  onAccept() {
    this._toastService.showToast.next(false);
  }

  onCancel() {
    this._toastService.showToast.next(false);
  }
}
