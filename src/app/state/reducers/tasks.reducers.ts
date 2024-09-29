import { createReducer, on } from '@ngrx/store';
import { getTasks } from '../actions/tasks.actions';
import { Task } from '../../core/interfaces/Task.interface';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(getTasks, (state) => {
    return state;
  })
);
