import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';

import { ClienteComponent } from './pages/cliente.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClienteComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ClienteModule {}
