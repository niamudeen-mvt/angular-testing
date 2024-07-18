import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  currentLang$ = new Subject<string>();

  constructor() {}
}
