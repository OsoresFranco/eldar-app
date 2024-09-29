import { createAction, props } from '@ngrx/store';
import { Task } from '../../core/interfaces/Task.interface';

export const getTasks = createAction(
  '[Task List] Get Task',
  props<{ tasks: Task[] }>()
);
