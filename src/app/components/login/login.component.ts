import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl } from "@angular/forms";
import Swal from 'sweetalert2';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password = new FormControl('');
  email = new FormControl('');

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.auth.singIn(this.email.value,this.password.value)
    .then (res=>{
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido !!!',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/pizza/home']);
      localStorage.setItem("usuario",this.email.value);
    }, error => {
      console.log(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email o Contraseña incorrecta!',
        footer: '<a></a>'
      })
    });
  }
  admin(){
    this.email.setValue("admin@admin.com");
    this.password.setValue("123456");
  }
  user(){
    this.email.setValue("empleado@empleado.com");    
    this.password.setValue("123456");
  }
}
