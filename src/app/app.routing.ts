import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar componentes
import {FrutaComponent} from "./fruta/fruta.component";
import {EmpleadosComponent} from "./empleado/empleados.component";
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import {CochesComponent} from "./coches/coches.component";
import {PlantillasComponent} from "./plantillas/plantillas.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'empleado', component: EmpleadosComponent
  },
  {
    path: 'fruta', component: FrutaComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contacto/:page', component: ContactoComponent
  },
  {
    path: 'coches', component: CochesComponent
  },
  {
    path: 'plantillas', component: PlantillasComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
