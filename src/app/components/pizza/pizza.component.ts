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
    // this.getAll();
    this.pizzaService.pizzas.subscribe(res=>{
      this.listaPizza = [];
      res.map(a=>{
        this.listaPizza.push(a);
      });
    });
   }

  ngOnInit(): void {
  }

  nuevaPizza(){
    this.altaPizza = true;
  }
  
  manejarNuevaPizza(nuevaPizza:Pizza){

    this.pizzaService.create(nuevaPizza);
    // this.listaPizza.push(nuevaPizza);
    console.log(this.listaPizza);
    this.altaPizza = false;
    
  }
  
}
