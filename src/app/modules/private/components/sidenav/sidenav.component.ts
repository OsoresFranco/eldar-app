import { Component, ViewEncapsulation } from '@angular/core';
import { Links } from '../../../../core/interfaces/Links.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {
  sidebarVisible: boolean = false;

  linkList: Links[] = [
    {
      icon: 'pi-desktop',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'pi-inbox',
      label: 'Tasks',
      route: '/tasks',
    },
  ];
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
