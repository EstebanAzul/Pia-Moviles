import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlInfoService {
  marcas : MarcasAutos[] = [
    {
      id: 1,
      nomMarca: 'Audi',
      img: './assets/fotos/marcas/audi.png',
      redirectTo: 'lista-autos/1'
    },
    {
      id: 2,
      nomMarca: 'Bentley',
      img: './assets/fotos/marcas/bentley.png',
      redirectTo: 'lista-autos/2'
    },
    {
      id: 3,
      nomMarca: 'BMW',
      img: './assets/fotos/marcas/bmw.png',
      redirectTo: 'lista-autos/3'
    },
    {
      id: 4,
      nomMarca: 'Bugatti',
      img: './assets/fotos/marcas/bugatti.png',
      redirectTo: 'lista-autos/4'
    },
    {
      id: 5,
      nomMarca: 'Cadilac',
      img: './assets/fotos/marcas/cadilac.png',
      redirectTo: 'lista-autos/5'
    },
    {
      id: 6,
      nomMarca: 'Hevrolet',
      img: './assets/fotos/marcas/chevrolet.png',
      redirectTo: 'lista-autos/6'
    }
  ];
  auto :  AutosInfo[] = [
    {
      id_auto: 1232,
      id_marca: 1,
      redirectToo: "./auto-data",
      nom_auto: "A1",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/audi/audi-a1.png",
      video: "ddd"
    },{
      id_auto: 1233,
      id_marca: 1,
      redirectToo: "./auto-data",
      nom_auto: "Q3",
      des_auto: "assets/fotos/autos/audi/audi-q3.png",
      img: "assets/fotos/autos/audi/audi-q3.png",
      video: "ddd"
    },{
      id_auto: 1234,
      id_marca: 1,
      redirectToo: "./auto-data",
      nom_auto: "RS3",
      des_auto: "assets/fotos/autos/audi/audi-rs3.png",
      img: "assets/fotos/autos/audi/audi-rs3.png",
      video: "ddd"
    },{
      id_auto: 1235,
      id_marca: 1,
      redirectToo: "./auto-data",
      nom_auto: "TT-RS",
      des_auto: "assets/fotos/autos/audi/audi-ttrs.png",
      img: "assets/fotos/autos/audi/audi-ttrs.png",
      video: "ddd"
    },
    {
      id_auto: 1236,
      id_marca: 1,
      redirectToo: "./auto-data",
      nom_auto: "R8",
      des_auto: "assets/fotos/autos/audi/audi-r8.png",
      img: "assets/fotos/autos/audi/audi-r8.png",
      video: "ddd"
    },
    {
      id_auto: 1237,
      id_marca: 2,
     redirectToo: "./auto-data",
      nom_auto: "Bacalar",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bentley/bentley-bacalar.png",
      video: "ddd"
    },
    {
      id_auto: 1238,
      id_marca: 2,
     redirectToo: "./auto-data",
      nom_auto: "Bentayga",
      des_auto: "",
      img: "assets/fotos/autos/bentley/bentley-bentayga.png",
      video: "ddd"
    },
    {
      id_auto: 1239,
      id_marca: 2,
     redirectToo: "./auto-data",
      nom_auto: "Continental",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bentley/bentley-continental.png",
      video: "ddd"
    },
    {
      id_auto: 1240,
      id_marca: 2,
     redirectToo: "./auto-data",
      nom_auto: "Flying Spur",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bentley/bentley-flying.png",
      video: "ddd"
    },
    {
      id_auto: 1241,
      id_marca: 2,
     redirectToo: "./auto-data",
      nom_auto: "Mulsanne",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bentley/bentley-mulsanne.png",
      video: "ddd"
    },
    {
      id_auto: 1242,
      id_marca: 3,
      redirectToo: "./auto-data",
      nom_auto: "1Series",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bmw/bmw-1series.png",
      video: "ddd"
    },
    {
      id_auto: 1243,
      id_marca: 3,
      redirectToo: "./auto-data",
      nom_auto: "I3",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bmw/bmw-i3.png",
      video: "ddd"
    },
    {
      id_auto: 1244,
      id_marca: 3,
      redirectToo: "./auto-data",
      nom_auto: "M6",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bmw/bmw-m6.png",
      video: "ddd"
    },
    {
      id_auto: 1245,
      id_marca: 3,
      redirectToo: "./auto-data",
      nom_auto: "X1",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bmw/bmw-x1.png",
      video: "ddd"
    },
    {
      id_auto: 1246,
      id_marca: 3,
      redirectToo: "./auto-data",
      nom_auto: "Z4",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bmw/bmw-z4.png",
      video: "ddd"
    },
    {
      id_auto: 1247,
      id_marca: 4,
      redirectToo: "./auto-data",
      nom_auto: "Bolide",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bugatti/bugatti-bolide.png",
      video: "ddd"
    },
    {
      id_auto: 1248,
      id_marca: 4,
      redirectToo: "./auto-data",
      nom_auto: "Chiron",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bugatti/bugatti-chiron.png",
      video: "ddd"
    },
    {
      id_auto: 1249,
      id_marca: 4,
      redirectToo: "./auto-data",
      nom_auto: "Divo",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bugatti/bugatti-divo.png",
      video: "ddd"
    },
    {
      id_auto: 1250,
      id_marca: 4,
      redirectToo: "./auto-data",
      nom_auto: "Veyron",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/bugatti/bugatti-veyron.png",
      video: "ddd"
    },
    {
      id_auto: 1251,
      id_marca: 5,
      redirectToo: "./auto-data",
      nom_auto: "ATS",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/cadillac/cadillac-ats.png",
      video: "ddd"
    },
    {
      id_auto: 1252,
      id_marca: 5,
      redirectToo: "./auto-data",
      nom_auto: "CT4",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/cadillac/cadillac-ct4.png",
      video: "ddd"
    },
    {
      id_auto: 1253,
      id_marca: 5,
      redirectToo: "./auto-data",
      nom_auto: "XT4",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/cadillac/cadillac-xt4.png",
      video: "ddd"
    },
    {
      id_auto: 1254,
      id_marca: 5,
      redirectToo: "./auto-data",
      nom_auto: "Escalade",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/cadillac/cadillac-escalade.png",
      video: "ddd"
    },
    {
      id_auto: 1255,
      id_marca: 6,
      redirectToo: "./auto-data",
      nom_auto: "Blazer",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/chevrolet/chevrolet-blazer.png",
      video: "ddd"
    },
    {
      id_auto: 1256,
      id_marca: 6,
      redirectToo: "./auto-data",
      nom_auto: "Bolt",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/chevrolet/chevrolet-bolt.png",
      video: "ddd"
    },
    {
      id_auto: 1257,
      id_marca: 6,
      redirectToo: "./auto-data",
      nom_auto: "Camaro",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/chevrolet/chevrolet-camaro.png",
      video: "ddd"
    },
    {
      id_auto: 1258,
      id_marca: 6,
      redirectToo: "./auto-data",
      nom_auto: "Impala",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/chevrolet/chevrolet-impala.png",
      video: "ddd"
    },
    {
      id_auto: 1259,
      id_marca: 6,
      redirectToo: "./auto-data",
      nom_auto: "Silverado",
      des_auto: "sadnklasndlkasnkldnaskld",
      img: "assets/fotos/autos/chevrolet/chevrolet-silverado.png",
      video: "ddd"
    }
  ];

  public getMarcas(){
    return this.marcas;
  }

  public getAutos(id){
    return this.auto.filter((e, i) =>{
      return e.id_marca == id;
    });
  }
  constructor() { 

    
  }
}

interface MarcasAutos {
  id: number;
  nomMarca: string;
  img: string;
  redirectTo: string;
}
interface AutosInfo {
  id_auto: number;
  id_marca: number;
  redirectToo: string;
  nom_auto: string;
  des_auto: string;
  img: string;
  video: string;

}