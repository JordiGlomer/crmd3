import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ListaClientesService {
  constructor(public http: HttpClient) {}

  getClientes$(): Observable<any> {
    return this.http.get(environment.api_url + 'clientes');
  }
}
