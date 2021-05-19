import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pizza } from "../modelos/pizza";
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  //todo esto falta
  //Falta crear el servico en firebase
  //transportar los métodos para crear modificar y eliminar
  //crear la clase pizza
  private dbPath = '/pizzas';

  pizzaRef: AngularFirestoreCollection<Pizza>;

  constructor(private db: AngularFirestore) {
    this.pizzaRef = db.collection(this.dbPath);
   }

  getAll(){
    return this.pizzaRef;
  }

  create(reparidor: Pizza): any {
    return this.pizzaRef.add({...reparidor});
  }

  update(id: string, data: Pizza): Promise<void> {
    return this.pizzaRef.doc(id).update({
      ingredientes: data.ingredientes,
      peso: data.peso,
      precio: data.precio
    });
  }

  delete(id: string): Promise<void> {
    return this.pizzaRef.doc(id).delete();
  }
}
