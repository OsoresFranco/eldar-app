import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(
      'https://x8ki-letl-twmt.n7.xano.io/api:LG7vscn6/auth/me'
    );
  }
}
