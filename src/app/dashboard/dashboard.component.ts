import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string

  constructor(
    public LoginService: LoginDataService,
    private router: Router
  ) {
    !LoginService.userKnown ? this.router.navigate(['login']) : this.username = LoginService.userLogin
    let a = 1;
  }

  ngOnInit(): void {

  }
  logout() {
    this.LoginService.logout()
  }

}
