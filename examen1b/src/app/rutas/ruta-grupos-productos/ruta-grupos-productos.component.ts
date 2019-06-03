import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';
import { ProcductosService } from 'src/app/servicios/productos/procductos.service';

@Component({
  selector: 'app-ruta-grupos-productos',
  templateUrl: './ruta-grupos-productos.component.html',
  styleUrls: ['./ruta-grupos-productos.component.css']
})
export class RutaGruposProductosComponent implements OnInit {


  constructor(private readonly _activatedRoute:ActivatedRoute,
              private readonly _productosService: ProcductosService) { }
  idGrupo:string;
  prueba=true;
  productos =[]
  

  ngOnInit() {
    this.productos= this._productosService.listarProductos();
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

  agregarProducto(formulario){
    this._productosService.agregarProducto(formulario, this.idGrupo);
  }
  eliminarProducto(producto){
    this._productosService.eliminar(producto)
  }

  

}
