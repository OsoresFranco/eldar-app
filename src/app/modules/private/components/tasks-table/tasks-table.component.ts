import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TasksTableComponent implements OnInit {
  ngOnInit(): void {
    this.setStatus();
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
  selectedComplexity: string = '';
  tasks: any[] = [
    {
      user: 'Juan Pérez',
      title: 'Completar informe de ventas',
      createdAt: new Date('2024-09-25'),
      deadline: new Date('2024-09-30'),
      status: 'inProgress', // Changed from 'En curso'
      complexity: 'medium',
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'María Rodríguez',
      title: 'Revisar propuesta de proyecto',
      createdAt: new Date('2024-09-20'),
      deadline: new Date('2024-09-28'),
      status: 'pending', // Changed from 'Pendiente'
      complexity: 'high', // Changed from 'Alta'
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'Sin asignar',
      title: 'Organizar reunión de equipo',
      createdAt: new Date('2024-09-26'),
      deadline: new Date('2024-10-05'),
      status: 'unassigned', // Changed from 'Sin asignar'
      complexity: 'low', // Changed from 'Baja'
      actions: ['Asignar'],
    },
    {
      user: 'Pedro Gómez',
      title: 'Preparar presentación para cliente',
      createdAt: new Date('2024-09-15'),
      deadline: new Date('2024-10-01'),
      status: 'inProgress', // Changed from 'En curso'
      complexity: 'medium', // Changed from 'Media'
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'Ana López',
      title: 'Actualizar documentación del proyecto',
      createdAt: new Date('2024-09-27'),
      deadline: new Date('2024-10-10'),
      status: 'blocked', // Changed from 'Bloqueada'
      complexity: 'medium', // Changed from 'Media'
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'Sin asignar',
      title: 'Investigar nuevas tecnologías',
      createdAt: new Date('2024-09-28'),
      deadline: new Date('2024-10-30'),
      status: 'unassigned', // Changed from 'Sin asignar'
      complexity: 'high', // Changed from 'Alta'
      actions: ['Asignar'],
    },
  ];

  setStatus() {
    this.tasks.forEach((task) => {
      task.status = task.status;
      task.complexity = task.complexity;
    });
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
}
