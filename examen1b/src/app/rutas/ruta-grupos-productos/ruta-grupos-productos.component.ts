import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-grupos-productos',
  templateUrl: './ruta-grupos-productos.component.html',
  styleUrls: ['./ruta-grupos-productos.component.css']
})
export class RutaGruposProductosComponent implements OnInit {

  productos=[
    {
      idChofer: "1",
      chasis: "jypo08-225",
      nombreMarca: "toyota",
      color: "azul",
      modelo: "Hilux",
      anio: "2019"
    },
    {
      idChofer: "2",
      chasis: "jypo08-225",
      nombreMarca: "hyunday",
      color: "negro",
      modelo: "Accent",
      anio: "2017"
    },{
      idChofer: "3",
      chasis: "jypo08-225",
      nombreMarca: "nissan",
      color: "azul",
      modelo: "xtrail",
      anio: "2008"
    }

  ]

  constructor(private readonly _activatedRoute:ActivatedRoute) { }
  idGrupo:string;
  prueba=true;

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    //el signo de dolar significa que esa variable
    //es un observable

    parametros$.subscribe(
      (parametros)=>{//ok
        console.log('Parametros', parametros);
        console.log('ok',parametros.idGrupo)
        this.idGrupo=parametros.idGrupo

      },
      (error)=>{// :()
        console.log('Error', error);

      },
      ()=>{// completado //opcional
        console.log('completo');
      }
    )


  }

}
