import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstaLogeadoService } from '../services/Guards/esta-logeado.service';
import { Auto } from '../dto/Auto';
import { HttpAutoService } from '../services/http/HttpAuto.service';

@Component({
  selector: 'app-agregar-autos',
  templateUrl: './agregar-autos.page.html',
  styleUrls: ['./agregar-autos.page.scss'],
})
export class AgregarAutosPage implements OnInit {
  idConductor:string;

  constructor(private readonly _router: Router,
    private readonly _estalogeado:EstaLogeadoService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _httpAuto:HttpAutoService) { }

async ngOnInit() {
this._estalogeado.estaLoggeado=true
const parametros$ = this._activatedRoute.params;
    await parametros$.subscribe(
      (parametros)=>{//ok
        console.log('Parametros', parametros);
        console.log('ok',parametros.idConductor)
        this.idConductor=parametros.idConductor

      },
      (error)=>{// :()
        console.log('Error', error);

      },
      ()=>{// completado //opcional
        console.log('completo');
      }
    )
}

chasis:number=0;
marca:string="";
color:string="";
modelo:string="";
valor:number=0;

crear(){
  const nuevoAuto:Auto = {
    chasis:this.chasis,
    marca: this.marca,
    color: this.color,
    modelo: this.modelo,
    valor: this.valor,
    fkConductor: this.idConductor
  }
  this._httpAuto.crear(nuevoAuto).subscribe(
    (datos)=>{
      console.log("Se agrego");
      alert("Agregado con exito")
      const url = ['/autos', this.idConductor]
      this._router.navigate(url)
    
    },
    (error)=>{console.log(error)},
  )

}

volver(){
//console.log("logueado", EstaLogeadoService.canActivate())
const url = ['/autos', this.idConductor]
this._router.navigate(url)
}

}
