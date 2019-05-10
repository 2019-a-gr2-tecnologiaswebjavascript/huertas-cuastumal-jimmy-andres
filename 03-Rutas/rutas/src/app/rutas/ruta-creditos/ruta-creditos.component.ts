import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    //el signo de dolar significa que esa variable
    //es un observable
    const parametrosCosulta$ = this._activatedRoute.queryParams;

    parametrosCosulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta',parametrosConsulta);
      }
    )

    parametros$.subscribe(
      (parametros)=>{//ok
        console.log('Parametros', parametros);

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
