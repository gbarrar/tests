import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{

  public nombre_prenda:string = "Pantalones";
  public coleccion_ropa:any = ["Pantalones blancos", "camiseta roja"];

  public fecha;

  constructor(
  ){
    this.fecha = Date();
  }

  prueba(nombre){
    return nombre;
  }

  addRopa(prenda){
    this.coleccion_ropa.push(prenda);
  }

  getRopa(){
    return this.coleccion_ropa;
  }

}
