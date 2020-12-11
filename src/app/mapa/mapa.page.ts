import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  address: string;
  lat: string;
  long: string;
  autocomplete: { input: string};
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
  ) { 
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: ''};
    this.autocompleteItems = [];
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) =>{
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAdressFormCoords(resp.coords.latitude, resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.map.addListeener('tilesloaded', () => {
        console.log('accuracy', this.map.center.lat(), this.map.center.lng())
        this.lat = this.map.center.lat()
        this.long = this.map.center.lng()
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAdressFormCoords(lattitude, longitude) {
    console.log("getAdressFormCoords " +lattitude+ " "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      this.address ="";
      let responseAdress = [];
      for(let [key, value] of Object.entries(result[0])){
      if(value.length > 0)
        responseAdress.push(value);
      }
      responseAdress.reverse();
      for(let value of responseAdress) {
        this.address += value+", ";
      }
      this.address = this.address.slice(0, -2);
    })
    .catch((error: any) => {
      this.address = "Adress Not Available";
    });
  }

  ShowCords(){
    alert('lat' +this.lat+', long '+this.long)
  }

  UpdateSearchResults() {
    if(this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({input: this.autocomplete.input},
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }

  SelectSearchResult(item) {
    alert(JSON.stringify(item))
    this.placeid = item.place_id
  }

  ClearAutocomplete() {
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }

  GoTo() {
    return window.location.href = 'https://www.google.com/maps/search/?api=!&query=Google&query_place_id='+this.placeid;
  }

}

