import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";

@Component({
  selector: 'app-eliminar-pizza',
  templateUrl: './eliminar-pizza.component.html',
  styleUrls: ['./eliminar-pizza.component.css']
})
export class EliminarPizzaComponent implements OnInit {
  
  @Input()
  pizza : Pizza;
  
  closeResult = '';

  constructor(private modalService: NgbModal,private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  eliminarPizza(){
    this.pizzaService.delete(this.pizza.id);
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
