import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaClientesService {

  constructor(private http:HttpClient) { }

  getClientes$(): Observable<any>{
      return this.http.get(environment.api_url);
  }
}

