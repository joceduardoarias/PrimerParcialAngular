import { Component, OnInit } from '@angular/core';
import { Repartidor } from "../../modelos/repartidor";
@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  repartidorP:Repartidor;
  
  constructor() { }

  ngOnInit(): void {
  }

  manejadorRepartidor(repartidor:Repartidor){
    this.repartidorP = repartidor;
  }
}
