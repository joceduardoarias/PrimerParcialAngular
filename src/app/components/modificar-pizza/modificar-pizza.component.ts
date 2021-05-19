import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {

  @Input()
  pizza : Pizza;
  closeResult = '';

  constructor(private pizzaService: PizzaService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  modificarPizza(){
    console.log("modificar: ", this.pizza);
    this.pizza.ingredientes = "guacamole";
    this.pizzaService.update(this.pizza.id,this.pizza )
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
