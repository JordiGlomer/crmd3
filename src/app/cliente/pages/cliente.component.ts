import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'crm-cliente',
  template: ` <crm-header></crm-header>
    <cliente-form
      [formGroup]="formGroup"
      [error]="error"
      (submitEvt)="editCliente($event)"
    ></cliente-form>`,
})
export class ClienteComponent implements OnInit {
  error!: any;
  cliente!: Cliente;
  formGroup!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cliente = new Cliente();
    // this.fb.group(this.cliente);
  }

  editCliente(cliente: Cliente) {}
  ngOnInit() {
    // this.clienteService.getCliente$().subscribe(data => {
    this.route.data.subscribe(
      (data) => {
        console.log(data);
        if (data.cliente !== 'jwt expired') {
          this.formGroup = this.fb.group({
            name: data.cliente[0].name,
            surname: data.cliente[0].surname,
            numeroCliente: data.cliente[0].id,
            email: data.cliente[0].email,
            category: data.cliente[0].category,
          });
        } else {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        if (error.status == '401') this.error = error;
        console.log(this.error);
      }
    );
  }
}
