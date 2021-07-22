import { Component, OnInit } from '@angular/core';

import { ListaClientesService } from '../lista-clientes.service';

@Component({
  selector: 'crm-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  providers: [ListaClientesService],
})
export class ListaClientesComponent implements OnInit {
  public clientes: any;
  constructor(private clientesService: ListaClientesService) {}

  ngOnInit() {
    this.clientesService.getClientes$().subscribe(
      (result) => {
        this.clientes = result;
        console.log(result);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
