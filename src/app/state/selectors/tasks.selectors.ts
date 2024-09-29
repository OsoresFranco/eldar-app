import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from '../../core/interfaces/Task.interface';

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasks');

export const selectTaskList = createSelector(selectTasks, (tasks) => {
  return tasks;
});
