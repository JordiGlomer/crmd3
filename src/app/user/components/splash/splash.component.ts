
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashComponent implements OnInit {
 
windowWidth!: string;
showSplash: boolean = true;
  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.windowWidth ='-' + window.innerWidth + 'px';
    },2000);
  }

}
