import { Component, OnInit } from '@angular/core';
import { Auto } from '../dto/Auto';
import { Router, ActivatedRoute } from '@angular/router';
import { EstaLogeadoService } from '../services/Guards/esta-logeado.service';
import { HttpAutoService } from '../services/http/HttpAuto.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {

  listaAutos: Auto[]=[]
  idConductor:string;
  autoABuscar:string;

  constructor(private readonly _router: Router,
              private readonly _estalogeado:EstaLogeadoService,
              private readonly _httpAuto:HttpAutoService,
              private readonly _activatedRoute:ActivatedRoute) { }

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
    this.listarAutosdeCliente()
  }

  listarAutosdeCliente(){
    this._httpAuto.buscarQuery(`where={"fkConductor":${this.idConductor}}`).subscribe(
      (dato)=>{
        console.log(dato)
        this.listaAutos =dato
      },
      (error)=>{
        console.log(error)
      }
  )
  }

  listarTodosLosAutos(){
    this._httpAuto.buscarTodos().subscribe(
      (dato)=>{
        console.log(dato)
        this.listaAutos =dato
      },
      (error)=>{
        console.log(error)
      }
  )
  }

  buscarAuto(textoBuscar:string){

  
    this._httpAuto.buscarQuery(`fkConductor=${this.idConductor}&modelo=${textoBuscar}`).subscribe(
        (dato)=>{
          console.log(dato)
          this.listaAutos =dato
        },
        (error)=>{
          console.log(error)
        }
    )
  }

  ionViewWillEnter() {
    this.listarAutosdeCliente();
    //this._estalogeado.estaLoggeado=true
  }
  async borrarAuto(idAuto){
    await this._httpAuto.borrar(idAuto.id).subscribe(
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

  volver(){
    //console.log("logueado", EstaLogeadoService.canActivate())
    const url = ['/tabs/tabs/tab1']
    this._router.navigate(url)
  }

}
