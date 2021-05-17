import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/modelos/repartidor';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input()
  repartidor:Repartidor = new Repartidor();
  
  constructor() { }

  ngOnInit(): void {
  }

}
