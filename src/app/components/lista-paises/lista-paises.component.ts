import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PaisesService } from "../../services/paises.service";

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  
  @Output()
  enviarPais:EventEmitter<any> = new EventEmitter<any>();

  pais: FormControl = new FormControl('',Validators.required);
  listaPaises : any[] = [];
  txtPais: string = "Seleccionar";
  flag:string = "";

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.obtenerData().subscribe((res:any)=>{
      console.log(res);
      
      this.cortarLita(res);
    });              
  }

  cortarLita(lista:any){
   for (let index = 0; index < 5; index++) {
     this.listaPaises[index]= lista[index];
   }
  }

  paisSeleccionado(pais:any){
    this.txtPais = pais.name;
    this.flag = pais.flag;
    this.enviarPais.emit(pais);
  }
  
}
