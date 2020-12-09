import { Component, OnInit } from '@angular/core';
import { ControlInfoService } from './control/control-info.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  marca = [];
  constructor(public marcas : ControlInfoService ) {
    this.marca = marcas.getMarcas();
   }

  ngOnInit() {
  }

}
