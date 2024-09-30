import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { SharedModule } from '../../shared/shared.module';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { HomeComponent } from './views/home/home.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent,
    SidenavComponent,
    LinkItemComponent,
    HomeComponent,
    TasksTableComponent,
    TaskModalComponent,
    UserModalComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
