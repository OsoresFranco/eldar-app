import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TasksTableComponent implements OnInit {
  @Input() tasks: any[] = [];

  ngOnInit(): void {}

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
