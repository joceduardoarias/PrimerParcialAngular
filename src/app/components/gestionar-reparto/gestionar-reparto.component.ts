import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/modelos/pizza';
import { Repartidor } from 'src/app/modelos/repartidor';
import { Contenedor } from "../../modelos/contenedor";
import Swal from 'sweetalert2';
import { ContenedorService } from "../../services/contenedor.service";
import { PizzaService } from "../../services/pizza.service";
@Component({
  selector: 'app-gestionar-reparto',
  templateUrl: './gestionar-reparto.component.html',
  styleUrls: ['./gestionar-reparto.component.css']
})
export class GestionarRepartoComponent implements OnInit {

  pizza:Pizza;
  contenedor:Contenedor;
  cantidad:number;
  constructor(private contenedorService:ContenedorService, private pizzaService:PizzaService) { 
   
  }

  ngOnInit(): void {
  }

  manejarProducto(pizza:Pizza){
    
    this.pizza = pizza;
    this.pizza.cantidad = this.cantidad;
    console.log("gestiona esta pizza: ",this.pizza);
    console.log("contenedor: ", this.contenedor);
    
    //Agregar productoKU
    if (this.contenedor != null) {
      if(this.contenedor.capacidad > this.contenedor.ocupacion && this.cantidad < this.contenedor.ocupacion){
        this.contenedor.ocupacion += this.cantidad;
        this.contenedor.productos.push(this.pizza);
        console.log(this.contenedor.id);
        
        this.contenedorService.updateProductos(this.contenedor.id,this.contenedor).then((a)=>{
          this.cantidad = 0;
        });
        // this.pizzaService.delete(this.pizza.id);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto asignada!',
          text:"Capacidad: "+this.contenedor.capacidad+" "+"Total productos asignadas: "+this.contenedor.productos.length,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'El contenedor esta al tope de su capacidad!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }else{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Debe seleccionar un contenedor!',
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  }

  manejarConetedor(contenedor:Contenedor){
    this.contenedor =contenedor;
    console.log("maneja este contenedor: ",this.contenedor);   
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Seleccionaste a '+this.contenedor.marca,
      text:"Capacidad: "+this.contenedor.capacidad,
      showConfirmButton: false,
      timer: 1500
    });
  }
 
}
