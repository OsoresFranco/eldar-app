import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Task } from '../../../../core/interfaces/Task.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  COMPLEXITY_LIST,
  STATUS_LIST,
} from '../../../../core/constants/catalog.constant';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TasksTableComponent implements OnChanges {
  @Input() tasks: Task[] = [];
  @Output() updateEmitter = new EventEmitter<boolean>();

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
  constructor(private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks']) {
      this.tasks = changes['tasks'].currentValue;
      console.log(this.tasks)
    }
  }
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

  showDialog() {
    const dialogRef = this.dialog
      .open(TaskModalComponent)
      .afterClosed()
      .subscribe((result) => {
        console.log(`Dialog result: ${result}`);
        this.updateEmitter.emit(result);
      });
  }
}
