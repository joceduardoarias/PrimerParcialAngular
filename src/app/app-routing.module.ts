import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


const routes: Routes = [
  {path:'',component:LoginComponent},  
  {path:'login',component:LoginComponent}, 
  {path:'registrarse',component:RegistrarComponent},
  {path:'pizza', loadChildren: () => import('./lazy-loadiing/lazy-loadiing.module').then(m => m.LazyLoadiingModule) },
  {path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
