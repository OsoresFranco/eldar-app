import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { LinkItemComponent } from './components/link-item/link-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent,
    SidenavComponent,
    FooterComponent,
    LinkItemComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
