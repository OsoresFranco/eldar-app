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
import { Links } from '../../../../core/interfaces/Links.interface';
import { CookieService } from 'ngx-cookie-service';
import { UserProfile } from '../../../../core/interfaces/UserProfile.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TasksTableComponent implements OnChanges, OnInit {
  @Input() tasks: Task[] = [];
  @Output() updateEmitter = new EventEmitter<boolean>();
  user!: UserProfile;
  displayedHeaders: string[] = [];
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
  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService,
    private taskService: TaskService
  ) {
    this.user = JSON.parse(this.cookieService.get('user'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks']) {
      this.tasks = changes['tasks'].currentValue;
    }
  }

  ngOnInit(): void {
    this.setupHeaders();
  }

  setupHeaders(): void {
    this.displayedHeaders = [...this.headers];
    if (!this.hasAccess('admin')) {
      this.displayedHeaders = this.displayedHeaders.filter(
        (header) => header !== 'actions'
      );
    }
  }
  onStatusSelect(event: any) {
    console.log('Selected status:', event);
    this.taskService.patchTask(event).subscribe({
      error: (error) => {
        console.log(error);
      },
    });
  }
  onComplexitySelect(event: any) {
    console.log('Selected complexity:', event.value);
  }
  isDueDate(date: Date) {
    const compareDate = new Date(date);
    const fechaActual = new Date();
    if (fechaActual > compareDate) {
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
        this.updateEmitter.emit(result);
      });
  }

  hasAccess(role: string): boolean {
    return this.user.role === role;
  }

  deleteTask(task: any) {
    this.taskService.deleteTask(task).subscribe({
      next: (res) => {
        this.updateEmitter.emit(true);
      },
    });
  }
}
