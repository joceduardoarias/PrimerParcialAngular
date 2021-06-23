import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from "../services/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router,private usuarioService:UsuarioService, private auth:AuthService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  async chequearUsuario(){
    
    var user = await this.auth.getCurrentUser();
  
    var dataUser : any = await this.usuarioService.getByEmail(user?.email);
    
    if (dataUser) {
  
      if(dataUser.tipo == 'admin'){
        return true;
      }else{
        this.router.navigateByUrl('login');
        return false;
      }  
    }else{
        this.auth.signOut();
        this.router.navigateByUrl('login');
        return false;
    }
  
   }
   
}
