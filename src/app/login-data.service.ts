import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  public userLogin: string = localStorage.getItem('username');
  public userKnown: boolean = this.userLogin !== null ? true : false

  constructor(private router: Router) {
  }

  login(user: string) {
    this.userLogin = user
    localStorage.setItem('username', this.userLogin)
    this.userKnown = true
    this.router.navigate(['dashboard'])
  }

  logout() {
    this.userLogin = ""
    localStorage.setItem('username', this.userLogin)
    this.userKnown = false
    this.router.navigate(['login'])
  }
}
