import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent {
  @Output() changeAtuhAction = new EventEmitter<string>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
      console.log(this.form.value);
      this.authService.postLogin(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }

  changeAction() {
    this.changeAtuhAction.emit('register');
  }
}
