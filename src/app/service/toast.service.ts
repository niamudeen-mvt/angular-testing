import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  showToast = new BehaviorSubject<boolean>(false);
}
