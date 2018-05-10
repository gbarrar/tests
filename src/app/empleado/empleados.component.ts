import { Component } from '@angular/core';
import {Empleado} from "../models/empleado";

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {
  public listado_empleados = 'Paulina, Gonzalo';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:Boolean;
  public input_value;

  constructor(){
    //solo en el caso de que se este seteando un elemento por default va aca, si no se debe setear en el init
    this.trabajador_externo = false;
    this.trabajadores = [];
  }

  ngOnInit(){
    this.empleado = new Empleado("Gonzalo Barra", 28, "Desarrollador", true);
    console.log(this.empleado);
    this.loadEmpleados();
  }

  cambiarExterno(value){
    this.trabajador_externo = value;
  }

  loadEmpleados(){
    const counter = 5;
    for (var i = 0; i < counter; i++){
      let trabajador:Empleado = new Empleado("Gonzalo Barra", i, "Especialista", i>2);

      this.trabajadores.push(trabajador);
    }
  }

}
