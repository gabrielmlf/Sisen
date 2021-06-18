import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GerarDiagnosticoService {
  request = new Subject<string[]>();

  constructor(private http: HttpClient) {}

  gerarDiagnostico(sintomas) {
    return new Promise((resolve, reject) => {
      try {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http
          .post('https://sisen.dev/api/diagnostico/', sintomas, { headers })
          .subscribe((response) => {
            resolve(response);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
}
