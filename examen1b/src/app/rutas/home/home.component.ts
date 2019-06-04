import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrarNombreService } from 'src/app/servicios/registrar/registrar-nombre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute,
              private readonly _registrarNombre:RegistrarNombreService) { }


            
  ngOnInit() {
    
  }

  nombre = this._registrarNombre.nombre
  

}
