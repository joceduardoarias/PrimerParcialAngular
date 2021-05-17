import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepartidoresService } from "../../services/repartidores.service";
import { Repartidor } from "../../modelos/repartidor";

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent implements OnInit {

  @Output()
  enviarRepartidor:EventEmitter<Repartidor> = new EventEmitter<Repartidor>();
  
  listaRep:any[]=[];

  constructor(private repartidorService:RepartidoresService) { 
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    var lista = this.repartidorService.repartidorRef.valueChanges({ idField: 'propertyId' })
     lista.subscribe(lista=>{
      
      this.listaRep = lista;
      console.log(this.listaRep);
      
     });       
  }

  repSeleccionado(repartidor:Repartidor){
    console.log(repartidor);
    this.enviarRepartidor.emit(repartidor);
  }
}
