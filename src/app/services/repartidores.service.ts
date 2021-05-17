import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Repartidor } from "../modelos/repartidor";

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  private dbPath = '/repartidor';

  repartidorRef: AngularFirestoreCollection<Repartidor>;

  constructor(private db: AngularFirestore) {
    this.repartidorRef = db.collection(this.dbPath);
   }

  getAll(){
    return this.repartidorRef;
  }

  create(reparidor: Repartidor): any {
    return this.repartidorRef.add({...reparidor});
  }

}
