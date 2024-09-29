import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss'
})
export class TasksTableComponent {
  products: any[] = [
    { name: 'Hola', price: '200,00', category: 'Belts', quantity: 12 },
    { name: 'Hola', price: '200,00', category: 'Belts', quantity: 12 },
    { name: 'Hola', price: '200,00', category: 'Belts', quantity: 12 },
    { name: 'Hola', price: '200,00', category: 'Belts', quantity: 12 },
    { name: 'Hola', price: '200,00', category: 'Belts', quantity: 12 },
    { name: 'Hola', price: '200,00', category: 'Belts', quantity: 12 },
  ];
}
