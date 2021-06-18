import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../login-data.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(public loginService: LoginDataService) {}

  ngOnInit(): void {}

  async login() {
    if (this.username && this.password) {
      await this.loginService.login({
        username: this.username,
        password: this.password,
      });
    } else alert('Usuário e senha não podem estar em branco');
  }
}
