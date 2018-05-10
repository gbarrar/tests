import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { routing, appRoutingProviders} from "./app.routing.js";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FrutaComponent } from "./fruta/fruta.component";
import { EmpleadosComponent } from "./empleado/empleados.component";
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ConversorFilter } from "./filters/conversor.filter";
import { CochesComponent } from "./coches/coches.component";
import {PlantillasComponent} from "./plantillas/plantillas.component";

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    ConversorFilter,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
