import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from "../../modelos/pizza";
@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.css']
})
export class RepartidorComponent implements OnInit {
  @Input()
  producto: Pizza = new Pizza();

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.producto);
    
  }

}
