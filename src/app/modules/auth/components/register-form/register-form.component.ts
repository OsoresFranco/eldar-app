import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../../../core/services/profile.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterFormComponent {
  @Output() changeAtuhAction = new EventEmitter<string>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cookiService: CookieService,
    private profileService: ProfileService
  ) {
    this.form = this.fb.group({
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

  submitForm() {
    if (this.form.valid) {
      let user = this.form.value;
      user = { ...user, role: 'admin' };
      this.authService.postSignUp(this.form.value).subscribe({
        next: (res) => {
          this.cookiService.set('authToken', res.authToken);
          this.profileService.getProfile().subscribe({
            next: (res) => {
              this.cookiService.set('user', JSON.stringify(res));
            },
          });
        },
      });
    }
  }

  changeAction() {
    this.changeAtuhAction.emit('login');
  }
}
