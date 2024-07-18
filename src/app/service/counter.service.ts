import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // count = new Subject<number>();
  count = new BehaviorSubject<number>(0);


  currentLang$ = new Subject<string>()

  constructor() { }
}
