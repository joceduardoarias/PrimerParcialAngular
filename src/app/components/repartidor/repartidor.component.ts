import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from "../../modelos/repartidor";
@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.css']
})
export class RepartidorComponent implements OnInit {
  @Input()
  repartidor: Repartidor = new Repartidor();

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
