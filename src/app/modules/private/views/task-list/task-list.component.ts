import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Store, select } from '@ngrx/store';
import { Task } from '../../../../core/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe({
    //   next: (res) => {
    //     this.tasks = res;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  postTask() {
    // this.taskService.postTask().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });
  }
}
