import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../shared/guards/auth.guard';

import { ClienteComponent } from './pages/cliente.component';

const routes: Routes = [{ path: '', component: ClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
