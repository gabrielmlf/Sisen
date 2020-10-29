import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../login-data.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  username: string = ""
  constructor(public loginService: LoginDataService) { }

  ngOnInit(): void {

  }

  login() {
    this.username !== "" ? this.loginService.login(this.username) : console.log("Erro! digite um login válido");
  }
}
