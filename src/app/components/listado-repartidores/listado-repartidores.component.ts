import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepartidoresService } from "../../services/repartidores.service";
import { Repartidor } from "../../modelos/repartidor";
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent implements OnInit {

  @Output()
  enviarProducto:EventEmitter<Pizza> = new EventEmitter<Pizza>();
  
  nuevoProducto: Pizza;
  listaProductos:any[]=[];

  constructor(private repartidorService:RepartidoresService,private pizzaService:PizzaService) { 
    // this.getAll();
    this.pizzaService.pizzas.subscribe(res=>{
      this.listaProductos = [];
      res.map(a=>{
        this.listaProductos.push(a);
      })
    });
    this.nuevoProducto = new Pizza();
  }

  ngOnInit(): void {
  }

  getAll(){
    var lista = this.pizzaService.pizzaRef.valueChanges({ idField: 'propertyId' })
     lista.subscribe(lista=>{
      
      this.listaProductos = lista;
      
     });       
  }

  productoSeleccionado(producto:Pizza){
    console.log(producto);
    this.enviarProducto.emit(producto);
  }
}
