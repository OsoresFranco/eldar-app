import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Task } from '../../core/interfaces/Task.interface';

export const selectTasksFeature = (state: AppState) => state;

export const selectTasksList = createSelector(
  selectTasksFeature,
  (state: AppState) => state.tasks
);
