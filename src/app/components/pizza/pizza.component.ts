import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  altaPizza:boolean = false;
  listaPizza:Pizza[] = [];
  auxPizza:Pizza;
  constructor(private pizzaService:PizzaService) {
    this.getAll();
    
   }

  ngOnInit(): void {
  }

  nuevaPizza(){
    this.altaPizza = true;
  }

  manejarNuevaPizza(nuevaPizza:Pizza){
    this.listaPizza.push(nuevaPizza);
    console.log(this.listaPizza);
    
  }

  getAll(){
    var contador = 0;
    this.listaPizza = [];
    this.auxPizza = new Pizza();
    var lista = this.pizzaService.pizzaRef.valueChanges({ idField: 'propertyId' })
     lista.subscribe(lista=>{
       for (var pizza of lista) {
         if (contador<lista.length) {
          this.auxPizza = pizza;  
          this.auxPizza.id = pizza.propertyId; 
          this.listaPizza.push(pizza);
          console.log(contador);
         }
         contador++;
       }
     });       
  }
}
