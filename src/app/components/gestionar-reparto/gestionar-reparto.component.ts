import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/modelos/pizza';
import { Repartidor } from 'src/app/modelos/repartidor';
import Swal from 'sweetalert2';
import { RepartidoresService } from "../../services/repartidores.service";
import { PizzaService } from "../../services/pizza.service";
@Component({
  selector: 'app-gestionar-reparto',
  templateUrl: './gestionar-reparto.component.html',
  styleUrls: ['./gestionar-reparto.component.css']
})
export class GestionarRepartoComponent implements OnInit {

  pizza:Pizza;
  repartidor:Repartidor;
  totalPizzas:Pizza[]=[];

  constructor(private reparService:RepartidoresService, private pizzaService:PizzaService) { }

  ngOnInit(): void {
  }

  manejarPizza(pizza:Pizza){
    this.pizza = pizza;
    console.log("gestiona esta pizza: ",this.pizza);
    console.log("repartidor: ", this.repartidor);
    
    //Agregar pizza
    if (this.repartidor != null) {
      if(parseInt(this.repartidor.capacidad) > this.repartidor.pizzas.length){
        this.repartidor.pizzas.push(this.pizza.id);
        this.reparService.update(this.repartidor.id,this.repartidor);
        this.pizzaService.delete(this.pizza.id);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Pizza asignada!',
          text:"Capacidad: "+this.repartidor.capacidad+" "+"Total Pizzas asignadas: "+this.repartidor.pizzas.length,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'El repartidor esta al tope de su capacidad!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }else{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Debe seleccionar un repartidor!',
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  }

  manejarRepartidor(repartidor:Repartidor){
    this.repartidor =repartidor;
    console.log("maneja este repartido: ",this.repartidor);   
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Seleccionaste a '+this.repartidor.nombre,
      text:"Capacidad: "+this.repartidor.capacidad,
      showConfirmButton: false,
      timer: 1500
    });
  }
 
}
