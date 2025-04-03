import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  isConnect = false;

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({ username: [], password: [] });
  }

  connect() {
    this.loginService
      .login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(() => {
        this.isConnect = true;
      });
  }

  logout() {
    this.loginService.logout().subscribe(() => {
      this.isConnect = false;
    });
  }
}
