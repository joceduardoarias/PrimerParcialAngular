import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  @Output()
  enviar : EventEmitter<Pizza> = new EventEmitter<Pizza>();

  formGruop:FormGroup;
  nuevaPizza: Pizza;

  constructor(private pizzaService:PizzaService) {   
    this.nuevaPizza = new Pizza();
  }

  ngOnInit(): void {
    this.formGruop=new FormGroup({
      nombre : new FormControl('',Validators.required),
      ingredientes : new FormControl('',Validators.required),
      precio : new FormControl('',Validators.required),
      peso : new FormControl('',[Validators.required,Validators.max(1000),Validators.min(500)])
    });
  }

  altaPizza(){
    this.nuevaPizza.ingredientes = this.formGruop.get('ingredientes').value;
    this.nuevaPizza.nombre = this.formGruop.get('nombre').value;
    this.nuevaPizza.precio = this.formGruop.get('precio').value;
    this.nuevaPizza.peso = this.formGruop.get('peso').value;
    console.log(this.nuevaPizza);
    
    this.pizzaService.create(this.nuevaPizza);
    this.enviarNuevaPizza(this.nuevaPizza);
  }

  enviarNuevaPizza(nuevaPizza:Pizza){
    this.enviar.emit(nuevaPizza);
  }
}