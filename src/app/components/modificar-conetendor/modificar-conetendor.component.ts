import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contenedor } from "../../modelos/contenedor";
import { ContenedorService } from "../../services/contenedor.service";

@Component({
  selector: 'app-modificar-conetendor',
  templateUrl: './modificar-conetendor.component.html',
  styleUrls: ['./modificar-conetendor.component.css']
})
export class ModificarConetendorComponent implements OnInit {

  @Input()
  contenedor : Contenedor;
  
  formGroup:FormGroup;
  nuevaContenedor: Contenedor;
  closeResult = '';

  constructor(private contenedorService: ContenedorService,private modalService: NgbModal) { 
    this.nuevaContenedor = new Contenedor();
  }

  ngOnInit(): void {
    this.formGroup=new FormGroup({      
      marca : new FormControl('',Validators.required),
      capacidad : new FormControl('',Validators.required),
    });
  }
  modificarPizza(){
    this.contenedor.marca = this.formGroup.get('marca').value;
    this.contenedor.capacidad = this.formGroup.get('capacidad').value;
    this.contenedorService.update(this.contenedor.id,this.contenedor )
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
