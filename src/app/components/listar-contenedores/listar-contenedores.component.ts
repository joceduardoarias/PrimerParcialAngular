import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contenedor } from "../../modelos/contenedor";
import { ContenedorService } from "../../services/contenedor.service";
@Component({
  selector: 'app-listar-contenedores',
  templateUrl: './listar-contenedores.component.html',
  styleUrls: ['./listar-contenedores.component.css']
})
export class ListarContenedoresComponent implements OnInit {

  @Output()
  enviarContenedor:EventEmitter<Contenedor> = new EventEmitter<Contenedor>();
  listContenedores:Contenedor[];
  constructor(private contenedorService: ContenedorService) { }

  ngOnInit(): void {
    this.contenedorService.contendores.subscribe(res=>{
      this.listContenedores=[];
      res.map(a=>{
        this.listContenedores.push(a);
      })
    })
  }

  contenedorSeleccionada(contenedor:Contenedor){
    this.enviarContenedor.emit(contenedor);
    console.log("contenedorSeleccionada",contenedor);
    
  }

}
