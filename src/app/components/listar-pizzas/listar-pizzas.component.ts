import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";

@Component({
  selector: 'app-listar-pizzas',
  templateUrl: './listar-pizzas.component.html',
  styleUrls: ['./listar-pizzas.component.css']
})
export class ListarPizzasComponent implements OnInit {

  @Output()
  enviarPizza:EventEmitter<Pizza> = new EventEmitter<Pizza>();

  listPizzas:Pizza[];

  constructor(private pizzaService:PizzaService) { 
    this.pizzaService.pizzas.subscribe(res=>{
      this.listPizzas=[];
      res.map(a=>{
        this.listPizzas.push(a);
      })
    })
  }

  ngOnInit(): void {
  }

  pizzaSeleccionada(pizza:Pizza){
    this.enviarPizza.emit(pizza);
    console.log(pizza);
    
  }
}
