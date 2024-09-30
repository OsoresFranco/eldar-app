import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Task } from '../../../../core/interfaces/Task.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  COMPLEXITY_LIST,
  STATUS_LIST,
} from '../../../../core/constants/catalog.constant';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TasksTableComponent {
  @Input() tasks: Task[] = [];

  headers: string[] = [
    'user',
    'title',
    'createdAt',
    'deadline',
    'status',
    'complexity',
    'actions',
  ];
  complexityList: any[] = COMPLEXITY_LIST;
  statusList: any[] = STATUS_LIST;
  constructor() {}
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
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
}
