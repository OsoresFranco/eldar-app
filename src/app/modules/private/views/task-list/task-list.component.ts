import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../../core/interfaces/Task.interface';
import { timer } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.getData();
  }

  getData() {
    this.taskService.getTasks().subscribe({
      next: (res) => {
        this.tasks = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateTask(event: boolean) {
    if (event) {
      timer(500).subscribe(() => {
        this.getData();
      });
    }
  }
}
