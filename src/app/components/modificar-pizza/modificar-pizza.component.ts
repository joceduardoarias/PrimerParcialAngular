import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/modelos/pizza';
import { PizzaService } from "../../services/pizza.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {

  @Input()
  pizza : Pizza;
  
  formGroup:FormGroup;
  nuevaPizza: Pizza;
  closeResult = '';

  constructor(private pizzaService: PizzaService,private modalService: NgbModal) {
      this.nuevaPizza = new Pizza();
   }

  ngOnInit(): void {
    this.formGroup=new FormGroup({      
      ingredientes : new FormControl('',Validators.required),
      precio : new FormControl('',Validators.required),
      peso : new FormControl('',[Validators.required,Validators.max(1000),Validators.min(500)])
    });
  }

  modificarPizza(){
    this.pizza.ingredientes = this.formGroup.get('ingredientes').value;
    this.pizza.precio = this.formGroup.get('precio').value;
    this.pizza.peso = this.formGroup.get('peso').value;
    console.log(this.nuevaPizza);
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
