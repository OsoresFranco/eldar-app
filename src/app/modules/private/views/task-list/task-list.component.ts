import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  postTask() {
    // this.taskService.postTask().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });
  }
}
