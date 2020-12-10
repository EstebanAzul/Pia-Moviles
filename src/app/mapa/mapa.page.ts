import { Component, OnInit } from '@angular/core';
import { GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
  } from '@ionic-native/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: GoogleMaps;
  constructor(private googlemapas: GoogleMaps) { }

  ngOnInit() {
  }

  ionViewDivLoad(){

  }

  cargarMapa(){
    let opcionesMapa: GoogleMapOptions = {
      mapType: 'MAP_TYPE_TERRAIN',

      controls: {
        compass: true,
        myLocationButton: true,
        zoom: true,
      },

      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.380982    
        },
        zoom: 20
      }

    }
  }

};

