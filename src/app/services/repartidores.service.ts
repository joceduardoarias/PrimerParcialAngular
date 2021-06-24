import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Repartidor } from "../modelos/repartidor";
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  private dbPath = '/repartidor';
  repartidores: Observable<Repartidor[]>;

  repartidorRef: AngularFirestoreCollection<Repartidor>;

  constructor(private db: AngularFirestore) {
    this.repartidorRef = db.collection(this.dbPath);
     //obtener coleción de usuarios
     this.repartidores = this.repartidorRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Repartidor;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

  getAll(){
    return this.repartidorRef;
  }

  create(reparidor: Repartidor): any {
    return this.repartidorRef.add({...reparidor});
  }

  update(id: string, data: Repartidor): Promise<void> {
    console.log(id);
    
    return this.repartidorRef.doc(id).update({
      pizzas:data.pizzas
    });
  }

}
