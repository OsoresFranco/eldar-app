import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store';
import { selectTasksList } from '../../../../state/selectors/tasks.selectors';
import { Task } from '../../../../core/interfaces/Task.interface';
import { getTasks } from '../../../../state/actions/tasks.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks:Task[] = [];


  constructor(private taskService: TaskService, private store: Store) {}

  ngOnInit(): void {
    // this.tasks = this.store.select(selectTasksList);
    // this.store.dispatch(getTasks());
    // this.taskService.getTasks().subscribe((data: any) => {
    //   this.tasks = data;
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
