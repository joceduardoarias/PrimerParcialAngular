import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  @Output()
  enviar : EventEmitter<Pizza> = new EventEmitter<Pizza>();

  formGruop:FormGroup;
  nuevoProducto: Pizza;
  validaComestible : boolean = false;

  constructor(private pizzaService:PizzaService) {   
    this.nuevoProducto = new Pizza();
  }

  ngOnInit(): void {
    this.formGruop=new FormGroup({
      descripcion : new FormControl('',Validators.required),
      precio : new FormControl('',Validators.required),
      stock : new FormControl('',[Validators.required,Validators.min(500),Validators.max(1000),]),
      comestible : new FormControl('',Validators.required),
    });
  }

  /**
   * hace el set de los datos del nuevo producto y envia el nuevo producto al componente
   * pizza para que este haga el alta.
   */
  altaPizza(){
    if (this.formGruop.status=='VALID') {
      this.nuevoProducto.descripcion = this.formGruop.get('descripcion').value;
      this.nuevoProducto.precio = this.formGruop.get('precio').value;
      this.nuevoProducto.stock = this.formGruop.get('stock').value;
      this.nuevoProducto.comestible = this.formGruop.get('comestible').value;
      console.log(this.nuevoProducto);
      
      this.enviarnuevoProducto(this.nuevoProducto);   
      this.formGruop.reset();
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

  enviarnuevoProducto(nuevoProducto:Pizza){
    this.enviar.emit(nuevoProducto);
  }

  asignarPais(pais:any){
    console.log(pais);
    this.nuevoProducto.bandera = pais.flag;
    this.nuevoProducto.pais = pais.name;
    this.nuevoProducto.moneda = pais.currencies[0].name;
    this.nuevoProducto.lenguaje = pais.languages[0].nativeName;
  }
  validaCheckBox(){
    this.formGruop.get('comestible')!.valueChanges.subscribe((res:any)=>{
      this.validaComestible = res;
    })
    console.log(this.formGruop.status);
    
  }
}
