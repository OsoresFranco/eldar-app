import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Store, select } from '@ngrx/store';
import { Task } from '../../../../core/interfaces/Task.interface';
import { selectTasks } from '../../../../state/selectors/tasks.selectors';
import { taskActions } from '../../../../state/actions/tasks.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks$: any;
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private store: Store) {
    this.tasks$ = this.store.select(selectTasks).pipe().subscribe({
      next: (res) => {
        console.log('LOCOOO',res);
      },
    });
  }

  ngOnInit(): void {
    this.taskService.getTasksTest().subscribe({
      next: (res) => {
        this.store.dispatch(taskActions.retrievedTasksList({ tasks: res }));
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
