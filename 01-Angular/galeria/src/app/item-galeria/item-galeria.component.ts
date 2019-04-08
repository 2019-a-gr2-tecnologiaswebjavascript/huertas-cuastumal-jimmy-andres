import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';

  @Input()
  textoBoton;

  @Input()
  nombreItem;

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
  }

}
/*

@Decorators()  //FUBCION QUE SE EJECUTA ANTES 
class Usuario{
  @DecoratorsVariable()
  private  nombre = 'Andres';

  constructor(@DecoratorsConstructor() nombre){

  }
  @DecoratorsMetodo()
  metodoPublico(){

  }
  private netodoPrivado(){

  }
  protected metodoProtected(){

  }
}
*/
