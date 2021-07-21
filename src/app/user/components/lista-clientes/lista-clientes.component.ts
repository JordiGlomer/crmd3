import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'crm-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  constructor(private http: HttpClient, public clientes: ClienteService) {}

  ngOnInit() {
    console.log(JSON.stringify(this.clientes));
  }
}
