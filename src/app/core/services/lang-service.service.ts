import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangServiceService {
  private langSubject = new BehaviorSubject<string>('en');
  lang$ = this.langSubject.asObservable();

  changeLanguage(lang: string) {
    this.langSubject.next(lang);
  }
}
