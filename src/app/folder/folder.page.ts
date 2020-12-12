import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  tempImg: string;
  constructor(private activatedRoute: ActivatedRoute, private camera: Camera) { }

  ngOnInit() {
     this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  camara() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then( ( imageData ) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.tempImg = base64Image;
     }, (err) => {
      // Handle error
     });

  }

}
