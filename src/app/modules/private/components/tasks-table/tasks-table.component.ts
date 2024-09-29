import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Task } from '../../../../core/interfaces/Task.interface';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TasksTableComponent implements OnInit, OnChanges {
  @Input() tasks: Task[] = [];

  ngOnInit(): void {
    console.log(this.tasks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks'] && changes['tasks'].currentValue) {
      const currentTasks = changes['tasks'].currentValue;

      if (currentTasks.tasks) {
        this.tasks = currentTasks.tasks;
      } else {
        this.tasks = currentTasks;
      }
      console.log(this.tasks);
    }
  }

  headers: string[] = [
    'user',
    'title',
    'createdAt',
    'deadline',
    'status',
    'complexity',
    'actions',
  ];
  complexityList: any[] = ['low', 'medium', 'high'];
  statusList: any[] = [
    'pending',
    'blocked',
    'inProgress',
    'completed',
    'unassigned',
  ];

  onStatusSelect(event: any) {
    console.log('Selected status:', event.value);
  }
  onComplexitySelect(event: any) {
    console.log('Selected complexity:', event.value);
  }
  isDueDate(date: Date) {
    const fechaActual = new Date();
    if (fechaActual > date) {
      return 'tasks-table__data-row--due';
    } else {
      return '';
    }
  }
}
