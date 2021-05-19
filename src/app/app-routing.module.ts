import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPizzaComponent } from './components/alta-pizza/alta-pizza.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { RepartidorDetalleComponent } from "./components/repartidor-detalle/repartidor-detalle.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'altaRepartidor',component:AltaRepartidorComponent},
  {path:'repartidorDetalle',component:RepartidorDetalleComponent},
  {path:'pizzas',component:PizzaComponent},
  {path:'altaPizza',component:AltaPizzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
