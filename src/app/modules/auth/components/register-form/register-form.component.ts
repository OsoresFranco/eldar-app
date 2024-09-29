import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterFormComponent {
  @Output() changeAtuhAction = new EventEmitter<string>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
    });
  }

  submitForm() {
    if (this.form.valid) {
      let user = this.form.value;
      user = { ...user, role: 'admin' };
      this.authService.postSignUp(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }

  changeAction() {
    this.changeAtuhAction.emit('login');
  }
}
