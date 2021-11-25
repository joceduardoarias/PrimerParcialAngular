import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Repartidor } from "../../modelos/repartidor";
import { Contenedor } from "../../modelos/contenedor";
import { RepartidoresService } from "../../services/repartidores.service";
import { ContenedorService } from "../../services/contenedor.service";
import { PaisesService } from "../../services/paises.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  contenedor: Contenedor;

  formGroup: FormGroup = new FormGroup({});
  listaPaises : any[];

  constructor(private contenedorService: ContenedorService) { 
    this.contenedor = new Contenedor();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      
      codigo : new FormControl('',Validators.required),
      capacidad : new FormControl('',Validators.required),
      marca : new FormControl('',Validators.required)

    });            
  }
  
  guardar(){

    this.contenedor.marca = this.formGroup.get("marca").value;
    this.contenedor.capacidad = this.formGroup.get("capacidad").value;
    this.contenedor.codigo = this.formGroup.get("codigo").value;
    
    console.log(this.contenedor);
    
    this.contenedorService.create(this.contenedor);
    this.formGroup.reset();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'contenedor dado de alta correctamente',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
