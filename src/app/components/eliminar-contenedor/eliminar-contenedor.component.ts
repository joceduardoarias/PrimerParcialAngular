import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Contenedor } from "../../modelos/contenedor";
import { ContenedorService } from "../../services/contenedor.service";

@Component({
  selector: 'app-eliminar-contenedor',
  templateUrl: './eliminar-contenedor.component.html',
  styleUrls: ['./eliminar-contenedor.component.css']
})
export class EliminarContenedorComponent implements OnInit {

  @Input()
  contenedor : Contenedor;
  
  closeResult = '';

  constructor(private modalService: NgbModal,private contenedorService: ContenedorService) { }

  ngOnInit(): void {
  }

  eliminarContenedor(){
    console.log(this.contenedor);
    
    this.contenedorService.delete(this.contenedor.id);
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
