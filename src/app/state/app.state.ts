import { Task } from '../core/interfaces/Task.interface';
import { ActionReducerMap } from '@ngrx/store';
import { taskReducer } from './reducers/tasks.reducers';

export interface AppState {
  tasks: Task[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tasks: taskReducer,
};
