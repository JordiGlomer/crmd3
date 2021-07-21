import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
// import {MDCTabBar} from '@material/tab-bar';


// const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private _authservice: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  salir() {
    if (confirm('Salir y cerrar sesión?')) {
      this._authservice.logout();
      this._router.navigate(['/login']);
    }
  }
  irMapa(){
    this._router.navigate(['/mapa']);
  }
}

