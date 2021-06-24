import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from "../../services/usuario.service";
import { AuthService } from "../../services/auth.service";
import { Usuario } from 'src/app/modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formRegistro:FormGroup;
  tipoValidar:boolean = false;
  nuevoUsuario:Usuario;

  constructor(private usuarioService:UsuarioService, private auth:AuthService, private router:Router) {
    this.nuevoUsuario = new Usuario();
    this.formRegistro=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      tipo: new FormControl('-1',Validators.required),
      nombre: new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
  }

  validarTipo(event:any){
    var valor = event.target.value;
    console.log(valor);
    if (valor!= '-1') {
     return this.tipoValidar = true;
    }else{
     return this.tipoValidar = false;
    }
  }
  registrar(){
    if (this.formRegistro.status == 'VALID') {
      if(this.tipoValidar){
        this.nuevoUsuario.email = this.formRegistro.get('email').value;          
          this.nuevoUsuario.password = this.formRegistro.get('password').value;
          this.nuevoUsuario.tipo = this.formRegistro.get('tipo').value;
          this.nuevoUsuario.nombre = this.formRegistro.get('nombre').value;
          console.log(this.nuevoUsuario);
          
          this.auth.registrar(this.nuevoUsuario.email,this.nuevoUsuario.password);
          this.usuarioService.create(this.nuevoUsuario);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario registrado correctamente!',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("login");
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debes seleccionar el tipo de usuario!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Todos los datos deben estar cargados!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
