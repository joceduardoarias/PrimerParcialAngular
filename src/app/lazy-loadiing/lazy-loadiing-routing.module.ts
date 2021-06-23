import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPizzaComponent } from '../components/alta-pizza/alta-pizza.component';
import { AltaRepartidorComponent } from '../components/alta-repartidor/alta-repartidor.component';
import { HomeComponent } from '../components/home/home.component';
import { PizzaComponent } from '../components/pizza/pizza.component';
import { RepartidorDetalleComponent } from '../components/repartidor-detalle/repartidor-detalle.component';
import { CheckLoginGuard } from '../guards/check-login.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'altaRepartidor',component:AltaRepartidorComponent,canActivate:[CheckLoginGuard]},
  {path:'repartidorDetalle',component:RepartidorDetalleComponent,canActivate:[CheckLoginGuard]},
  {path:'pizzas',component:PizzaComponent},
  {path:'altaPizza',component:AltaPizzaComponent,canActivate:[CheckLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadiingRoutingModule { }
