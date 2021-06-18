import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginDataService {
  public userLogin: string = localStorage.getItem('username');
  public userKnown: boolean = this.userLogin !== null ? true : false;

  constructor(private router: Router, private http: HttpClient) {}

  async login(data) {
    try {
      const response = await this.validateLogin(data);
      if (response) {
        this.userLogin = data.username;
        localStorage.setItem('username', this.userLogin);
        this.userKnown = true;
        this.router.navigate(['dashboard']);
      } else {
        throw new Error('Usuário ou senha incorreto');
      }
    } catch {
      throw new Error('Erro ao acessar o servidor, tente novamente mais tarde');
    }
  }

  validateLogin(data): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http
          .post('https://sisen.dev/api/login/', data, { headers })
          .subscribe((response: boolean) => {
            response ? resolve(true) : resolve(false);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  logout() {
    localStorage.setItem('username', '');
    this.userKnown = false;
    this.router.navigate(['login']);
  }
}
