import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  providers:[]
})
export class PlantillasComponent{

  public titulo;
  public administrador;

  constructor(

  ){
    this.titulo = "Plantillas ngTemplate en Angular";
    this.administrador = true;
  }

}
