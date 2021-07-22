import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.authService.getToken()}`,
  });
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private error: ErrorService
  ) {
    // this.headers.set('Authorization',`Bearer ${this.authService.getToken()}`);
    console.log(this.headers);
  }

  getCliente$(): Observable<Cliente> {
    return this.http
      .get<Cliente>(environment.api_url.concat('clientes'), {
        headers: this.headers,
      })
      .pipe(
        tap((data: any) => console.log('tap data' + data)),
        catchError(this.error.handleErrors)
      );
  }
}
