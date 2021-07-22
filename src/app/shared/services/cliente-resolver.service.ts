import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { Cliente } from '../model/cliente';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteResolverService implements Resolve<Cliente> {
  constructor(private clienteService: ClienteService) {}

  resolve() {
    return this.clienteService.getCliente$().pipe(
      take(1),
      catchError((error) => {
        console.log(error);
        return of(error.error);
      })
    );
  }
}
