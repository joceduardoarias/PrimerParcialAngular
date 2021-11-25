import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pizza } from "../modelos/pizza";
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  //todo esto falta
  //Falta crear el servico en firebase
  //transportar los métodos para crear modificar y eliminar
  //crear la clase pizza
  private dbPath = '/productos';
  pizzas: Observable<Pizza[]>;
  pizzaRef: AngularFirestoreCollection<Pizza>;

  constructor(private db: AngularFirestore) {
    this.pizzaRef = db.collection(this.dbPath);
    //obtener coleción de usuarios
    this.pizzas = this.pizzaRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Pizza;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

  getAll(){
    return this.pizzaRef;
  }

  create(pizza: Pizza): any {
    return this.pizzaRef.add({...pizza});
  }

  update(id: string, data: Pizza): Promise<void> {
    return this.pizzaRef.doc(id).update({
      ingredientes: data.ingredientes,
      peso: data.peso,
      precio: data.precio
    });
  }

  delete(id: string): Promise<void> {
    console.log("Elimina esta pizza",id);
    
    return this.pizzaRef.doc(id).delete();
  }
}
