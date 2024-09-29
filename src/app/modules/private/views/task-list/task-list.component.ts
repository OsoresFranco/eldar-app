import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Store, select } from '@ngrx/store';
import { Task } from '../../../../core/interfaces/Task.interface';
import { selectTasks } from '../../../../state/selectors/tasks.selectors';
import { taskActions } from '../../../../state/actions/tasks.actions';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks$: any;

  constructor(
    private taskService: TaskService,
    private store: Store<AppState>
  ) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnInit(): void {
    this.taskService.getTasksTest().subscribe({
      next: (res) => {
        this.store.dispatch(taskActions.getTasksList({ tasks: res }));
      },
    });
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
