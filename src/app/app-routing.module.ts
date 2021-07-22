import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { ClienteResolverService } from './shared/services/cliente-resolver.service';
import { HomeComponent } from './user/components/home/home.component';
import { LoginComponent } from './user/pages/login.component';
import { RegisterComponent } from './user/pages/register.component';
import { ListaClientesComponent } from './user/components/lista-clientes/lista-clientes.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SplashComponent } from './user/components/splash/splash.component';

const routes: Routes = [
  // { path: 'splash', component: SplashComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
    canLoad: [AuthGuard],
    resolve: { cliente: ClienteResolverService },
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
    canLoad: [AuthGuard],
    resolve: { cliente: ClienteResolverService },
  },
  {
    path: 'lista-clientes',
    component: ListaClientesComponent,
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
    canLoad: [AuthGuard],
    resolve: { cliente: ClienteResolverService },
  },
  {
    path: "",
    redirectTo: "/login-form",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
