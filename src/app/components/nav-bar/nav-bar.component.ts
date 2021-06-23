import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuarioLogueado:boolean = false;
  usuario!:string;

  constructor(private auth:AuthService) {
    this.auth.isAuth().subscribe((res:any)=>{
      if (res) {
        this.usuarioLogueado = true;  
        this.usuario = res.email;
      }else{
        this.usuarioLogueado = false;
      }
      
    });
   }

  ngOnInit(): void {
  }

  salir(){
    this.auth.signOut();
  }
  
}
