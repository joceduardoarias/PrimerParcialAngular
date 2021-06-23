import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},  
  {path:'pizza', loadChildren: () => import('./lazy-loadiing/lazy-loadiing.module').then(m => m.LazyLoadiingModule) },
  {path: '', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
