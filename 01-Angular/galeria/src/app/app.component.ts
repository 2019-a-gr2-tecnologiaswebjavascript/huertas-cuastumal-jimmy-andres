import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];

  arregloFloresJs = [
    {
      nombre:"Papitas",
      descripcion:"A lo bestia",
      // dato:1,
      // dato1:1.1,
      // dato3:" asdasd ",
      // dato4:false,
      // dato5:true,
      // dato6:null
    },
    {
      nombre:"Carnitas",
      descripcion:"Gorditas"
    },
    {
      nombre:"Chicas",
      descripcion:"Cheveres"
    }
  ]


  cambioChela(evento:boolean){
    // logica hacerle verde
    console.log('Llego a chela: ', evento);
  }

  cambioCerveza(evento:boolean){
    // logica hacerle amarillo
    console.log('Llego a cerveza: ', evento);
  }



}

class Flor{
  constructor(
    public nombre: string,
    public descripcion:string){
  }
}


