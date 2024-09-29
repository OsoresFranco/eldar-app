import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../../../core/interfaces/Task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasksTest(): Observable<Array<Task>> {
    return this.http.get<Task[]>(
      'https://my-json-server.typicode.com/OsoresFranco/eldar-app/tasks'
    );
  }

  getTasks(): Observable<any> {
    return this.http.get(
      'https://my-json-server.typicode.com/OsoresFranco/eldar-app/tasks'
    );
  }
  postTask(data: any): Observable<any> {
    return this.http.post(
      'https://my-json-server.typicode.com/OsoresFranco/eldar-app/tasks',
      data
    );
  }
}
