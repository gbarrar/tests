import { Component } from '@angular/core';
import { Coche } from "./coche";
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers:[PeticionesService]
})
export class CochesComponent{
  public coche:Coche
  public coches:Array<Coche>;
  public articulos;

  constructor(
    private _peticionesService:PeticionesService
){
    this.coche = new Coche("","", "");
    this.coches = [
      new Coche("Veloster", "11", "gris"),
      new Coche("Swift", "1", "grus")
    ]
  }

  ngOnInit(){
    console.log(this._peticionesService.getPrueba());
    this._peticionesService.getArticulos().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(){
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}
