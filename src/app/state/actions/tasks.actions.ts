import { createActionGroup, props } from '@ngrx/store';
import { Task } from '../../core/interfaces/Task.interface';

export const taskActions = createActionGroup({
  source: 'Tasks API',
  events: {
    'Get Tasks List': props<{ tasks: Task[] }>(),
  },
});
