import { Component, OnInit } from '@angular/core';
import { Repartidor } from "../../modelos/repartidor";
import { Pizza } from 'src/app/modelos/pizza';
@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  producto:Pizza;
  
  constructor() { }

  ngOnInit(): void {
  }

  manejadorProducto(producto:Pizza){
    console.log(producto);
    
    this.producto = producto;
  }
}
