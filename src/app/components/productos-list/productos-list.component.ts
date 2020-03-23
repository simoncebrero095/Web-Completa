import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  //Variable
  public titulo:String;
  public products;
  //Propiedad privada para los servicios
  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private servicio: ServicesService,

    ) { 
    this.titulo ='Listado de productos';
  }

  ngOnInit(){
    console.log('Producto-list.component.ts cargado');
    this.servicio.getProducts().subscribe(
      respuesta => {
        this.products = respuesta;
      }
    )

  }

}
