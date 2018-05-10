import { Component } from '@angular/core';
import { RopaService } from "../services/ropa.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent{
  public titulo = 'pagina principal';
  public listado_ropa:Array<String>;
  public prenda_a_guardar:String;
  public fecha:Date;

  constructor(
    private _ropaService:RopaService
  ){}

  ngOnInit(){
    console.log(this._ropaService.prueba("Testing"));
    this.listado_ropa = this._ropaService.getRopa();
    this.fecha = this._ropaService.fecha;
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
  }

}
