import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/modelos/repartidor';
import { Pizza } from 'src/app/modelos/pizza';
@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input()
  producto:Pizza = new Pizza();
  
  constructor() { }

  ngOnInit(): void {
  }

}
