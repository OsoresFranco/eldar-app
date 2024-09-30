import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';
import { AuthService } from '../../../auth/services/auth.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  headers: string[] = ['name', 'lastName', 'email', 'role'];

  users: any[] = [];

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
    });
  }

  showDialog() {
    const dialogRef = this.dialog
      .open(UserModalComponent)
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (res) {
            console.log(res);
            if (res) {
              timer(500).subscribe({
                next: () => {
                  this.getUsers();
                },
              });
            }
          }
        },
      });
  }
}
