import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  postLogin(data: any): Observable<any> {
    return this.http.post(
      'https://x8ki-letl-twmt.n7.xano.io/api:LG7vscn6/auth/login',
      data
    );
  }

  postSignUp(data: any): Observable<any> {
    return this.http.post(
      'https://x8ki-letl-twmt.n7.xano.io/api:LG7vscn6/auth/signup',
      data
    );
  }
}
