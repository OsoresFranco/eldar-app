import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROLE_LIST } from '../../../../core/constants/catalog.constant';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})
export class UserModalComponent {
  userForm: FormGroup = new FormGroup({});
  roleList = ROLE_LIST;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d).{8,}$'),
        ],
      ],
      role: ['admin'],
    });
  }

  submit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      console.log(user);
      this.authService.postSignUp(user).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }
}
