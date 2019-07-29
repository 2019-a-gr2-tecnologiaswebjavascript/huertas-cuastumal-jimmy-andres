import { Component } from '@angular/core';
import { Conductor } from '../dto/Conductor';
import { HttpConductorService } from '../services/http/HttpConductor.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private readonly _httpConductor:HttpConductorService) {}



  listaConductores: Conductor[]=[]
  

  ionViewWillEnter() {
    this.listarConductores();
    //this._estalogeado.estaLoggeado=true
  }

  listarConductores(){
    this._httpConductor.buscarTodos().subscribe(
        (datos)=>{
          this.listaConductores = datos
          console.log(datos)},
        (error)=>{console.log(error)},
        ()=>{console.log("datos actualizados")}
    )

  }
  buscarConductor(textoBuscar:string){

    this._httpConductor.buscarQuery(`where={"nombre":{"contains":"${textoBuscar}"}}`).subscribe(
        (dato)=>{
          console.log(dato)
          this.listaConductores =dato
        },
        (error)=>{
          console.log(error)
        }
    )
  }

  async borrarConductor(idConductor){
    await this._httpConductor.borrar(idConductor.id).subscribe(
      (dato)=>{
        console.log(dato)
        alert("funciono")
        this.ionViewWillEnter()
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  
}
