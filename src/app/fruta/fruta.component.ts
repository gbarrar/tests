import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {

  //propiedades definidas aqui, parecido a las variables usadas en nuestro proyecto
  public nombre_componente;
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
  private hola = 'privado';
  public nombre:string = "Gonzalo Barra";
  public edad:number = 28;
  public hombre: boolean = true;
  public trabajos:Array<string> = ["Informático", "Industrial"];
  comdin:any = [];

  //metodo que se ejecuta inicialmente dentro del component.ts, aqui no se llaman funciones
  constructor(){
    console.log(this.trabajos);
    this.nombre_componente = 'Componente de fruta'; //asi se tiene que hacer
  }

  //segundo metodo que se ejcuta de manera automatico luego de constructor
  ngOnInit(){
    this.holaMundo();

    //una buena practiva es el nuevo standar es usar var en remplazo de let, esta actua a nivel de bloque a diferencia de var
    var uno = 1;
    var dos = 2;
    if (uno === 1){
      let dos = 3;
      console.log(dos);
      console.log(uno);
    }
  }

  holaMundo(){
    console.log("Hola mundo");
  }

}
