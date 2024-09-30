import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../core/services/profile.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent {
  @Output() changeAtuhAction = new EventEmitter<string>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cookiService: CookieService,
    private router: Router,
    private profileService: ProfileService
  ) {
    this.form = this.fb.group({
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
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.authService.postLogin(this.form.value).subscribe({
        next: (res) => {
          this.cookiService.set('authToken', res.authToken);
          this.profileService.getProfile().subscribe({
            next: (res) => {
              this.cookiService.set('user', JSON.stringify(res));
            },
          });
          timer(500).subscribe({
            next: () => {
              this.router.navigate(['/private']);
            },
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  changeAction() {
    this.changeAtuhAction.emit('register');
  }
}
