import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks = [
    {
      user: 'Juan Pérez',
      title: 'Completar informe de ventas',
      createdAt: new Date('2024-09-25'),
      deadline: new Date('2024-09-30'),
      status: 'inProgress',
      complexity: 'medium',
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'María Rodríguez',
      title: 'Revisar propuesta de proyecto',
      createdAt: new Date('2024-09-20'),
      deadline: new Date('2024-09-28'),
      status: 'pending',
      complexity: 'high',
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'Sin asignar',
      title: 'Organizar reunión de equipo',
      createdAt: new Date('2024-09-26'),
      deadline: new Date('2024-10-05'),
      status: 'unassigned',
      complexity: 'low',
      actions: ['Asignar'],
    },
    {
      user: 'Pedro Gómez',
      title: 'Preparar presentación para cliente',
      createdAt: new Date('2024-09-15'),
      deadline: new Date('2024-10-01'),
      status: 'inProgress',
      complexity: 'medium',
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'Ana López',
      title: 'Actualizar documentación del proyecto',
      createdAt: new Date('2024-09-27'),
      deadline: new Date('2024-10-10'),
      status: 'blocked',
      complexity: 'medium',
      actions: ['Editar', 'Eliminar', 'Asignar'],
    },
    {
      user: 'Sin asignar',
      title: 'Investigar nuevas tecnologías',
      createdAt: new Date('2024-09-28'),
      deadline: new Date('2024-10-30'),
      status: 'unassigned',
      complexity: 'high',
      actions: ['Asignar'],
    },
  ];
}
