import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Repartidor } from "../../modelos/repartidor";
import { RepartidoresService } from "../../services/repartidores.service";
import { PaisesService } from "../../services/paises.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  repartidor: Repartidor;

  formGroup: FormGroup = new FormGroup({});
  listaPaises : any[];
  validaUnidad : boolean = false;

  constructor(private repartidorSericio : RepartidoresService, private paisesService: PaisesService) { 
    this.repartidor = new Repartidor();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      
      dni : new FormControl('',Validators.required),
      edad : new FormControl('',Validators.required),
      capacidad : new FormControl('',Validators.required),
      // pais : new FormControl('',Validators.required),
      unidadPrpia : new FormControl('',Validators.required),
      nombre : new FormControl('',Validators.required)

    });            
  }
  
  validaCheckBox(){
    this.formGroup.get('unidadPrpia')!.valueChanges.subscribe((res:any)=>{
      this.validaUnidad = res;
    })
    console.log(this.formGroup.status);
    
  }
  asignarPais(pais:any){
    console.log(pais);
    this.repartidor.pais = pais.name;
    this.repartidor.bandera = pais.flag;
    this.repartidor.capital = pais.capital;
    this.repartidor.idioma = pais.languages[0].nativeName;
  }

  guardar(){

    this.repartidor.nombre = this.formGroup.get("nombre").value;
    this.repartidor.capacidad = this.formGroup.get("capacidad").value;
    this.repartidor.edad = this.formGroup.get("edad").value;
    this.repartidor.dni = this.formGroup.get("dni").value;
    
    console.log(this.repartidor);
    
    this.repartidorSericio.create(this.repartidor);
    this.formGroup.reset();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Repartidor dado de alta correctamente',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
