import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Links } from '../../../../core/interfaces/Links.interface';
import { ProfileService } from '../../../../core/services/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { UserProfile } from '../../../../core/interfaces/UserProfile.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {
  sidebarVisible: boolean = false;
  user!: UserProfile;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
  }

  linkList: Links[] = [
    {
      icon: 'pi-desktop',
      label: 'Dashboard',
      route: '/private/dashboard',
      roleAllowed: 'admin',
    },
    {
      icon: 'pi-inbox',
      label: 'Tasks',
      route: '/private/tasks',
    },
  ];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  hasAccess(link: Links): boolean {
    if (!link.roleAllowed) return true;
    this.user.role;
    return this.user.role === link.roleAllowed;
  }
}
