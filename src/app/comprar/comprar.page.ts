import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})

export class ComprarPage implements OnInit {

  constructor(private alertCtrl: AlertController, private loadingController: LoadingController, private router: Router) { }


  handleButtonClick() {
    const loading = this.loadingController.create({
      message: 'Por favor espere...',
      duration: 2000
    })
    .then(loadingController=>{
      loadingController.present();
    });
    this.router.navigate(['/','inicio']),
    this.success()
  }

  success(){
    let alert = this.alertCtrl.create({
      header: 'Compra Exitosa', 
      buttons: [
        {text: 'Ok', handler:()=>{
        }},
      ]
    })
    .then(alertCtrl=>{
      alertCtrl.present();
    });
  }
  

  ngOnInit() {
  }

}