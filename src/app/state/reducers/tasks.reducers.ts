import { createReducer, on } from '@ngrx/store';
import { Task } from '../../core/interfaces/Task.interface';
import { taskActions } from '../actions/tasks.actions';

export const initialState: ReadonlyArray<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(taskActions.retrievedTasksList, (_state, { tasks }) => tasks)
);
