import { ControlInfoService } from './../galeria/control/control-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  autos = [];
  constructor(public auto: ControlInfoService) {
    this.autos = auto.auto;
   }


  ngOnInit() {
  }

}
