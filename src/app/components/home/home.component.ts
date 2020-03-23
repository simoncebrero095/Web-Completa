import { Component, OnInit } from '@angular/core';

@Component({
  selector: ' ',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo:string;
  
  constructor() { 
    this.titulo ='Webapp de producto con Angular 4';
  }

  ngOnInit(){
    console.log('Se ha cargado el componente home.component.ts');
  }

}
