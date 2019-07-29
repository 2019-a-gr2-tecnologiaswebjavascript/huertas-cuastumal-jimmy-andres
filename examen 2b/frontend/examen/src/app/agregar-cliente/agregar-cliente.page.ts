import { Component, OnInit } from '@angular/core';
import { EstaLogeadoService } from '../services/Guards/esta-logeado.service';
import { Router } from '@angular/router';
import { Conductor } from '../dto/Conductor';
import { HttpConductorService } from '../services/http/HttpConductor.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.page.html',
  styleUrls: ['./agregar-cliente.page.scss'],
})
export class AgregarClientePage implements OnInit {

  constructor(private readonly _router: Router,
    private readonly _estalogeado:EstaLogeadoService,
    private readonly _httpConductor:HttpConductorService) { }

ngOnInit() {
this._estalogeado.estaLoggeado=true
}

nombre :string=""
apellido :string=""
numeroAutos:number=0
licenciaValida:boolean=false
  


crear(){
  const nuevoConductor: Conductor={
    nombre:this.nombre,
    apellido: this.apellido,
    numeroAutos: this.numeroAutos,
    licenciaValida :this.licenciaValida
  }
  this._httpConductor.crear(nuevoConductor).subscribe(
    (datos)=>{
      console.log("Se agrego");
      alert("Agregado con exito")
      const url = ['/tabs/tabs/tab1']
      this._router.navigate(url)
    
    },
    (error)=>{console.log(error)},
  )

  console.log("nuevo",nuevoConductor)
}

volver(){
//console.log("logueado", EstaLogeadoService.canActivate())
const url = ['/tabs/tabs/tab1']
this._router.navigate(url)
}

}
