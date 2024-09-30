import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../../../core/interfaces/Task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(
      'https://x8ki-letl-twmt.n7.xano.io/api:PM0RGqcn/tasks'
    );
  }
  postTask(data: any): Observable<any> {
    return this.http.post(
      'https://x8ki-letl-twmt.n7.xano.io/api:PM0RGqcn/tasks',
      data
    );
  }

  deleteTask(data: any): Observable<any> {
    return this.http.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:PM0RGqcn/tasks/${data.id}`
    );
  }
}
