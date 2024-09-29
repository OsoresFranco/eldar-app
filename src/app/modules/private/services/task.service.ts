import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(
      'https://my-json-server.typicode.com/OsoresFranco/eldar-app/tasks'
    );
  }
  postTask(data: any): Observable<any> {
    return this.http.post('https://my-json-server.typicode.com/OsoresFranco/eldar-app/tasks', data);
  }
}
