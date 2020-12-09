import { Component, OnInit } from '@angular/core';
import { ControlInfoService } from '../control/control-info.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.page.html',
  styleUrls: ['./lista-autos.page.scss'],
})
export class ListaAutosPage implements OnInit {
  autos = [];
  id = null;
  constructor(public autosInfo : ControlInfoService, public router : ActivatedRoute) { 
   this.id = router.snapshot.paramMap.get('id');
   this.autos = autosInfo.getAutos(this.id);
   
  }

  ngOnInit() {
  }

}
