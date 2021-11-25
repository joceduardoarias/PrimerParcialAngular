import { Injectable } from '@angular/core';
import { Contenedor } from "../modelos/contenedor";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContenedorService {

  private dbPath = '/contenedor';
  contendores: Observable<Contenedor[]>;
  contenedorRef: AngularFirestoreCollection<Contenedor>;

  constructor(private db: AngularFirestore) {
    this.contenedorRef = db.collection(this.dbPath);
    //obtener coleción de usuarios
    this.contendores = this.contenedorRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Contenedor;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

  getAll(){
    return this.contenedorRef;
  }

  create(pizza: Contenedor): any {
    return this.contenedorRef.add({...pizza});
  }

  update(id: string, data: Contenedor): Promise<void> {
    return this.contenedorRef.doc(id).update({
      marca: data.marca,
      capacidad: data.capacidad
    });
  }
  updateProductos(id: string, data: Contenedor): Promise<void> {
    return this.contenedorRef.doc(id).update({
      productos : data.productos
    });
  }
  delete(id: string): Promise<void> {
    console.log("Elimina contenedor",id);
    
    return this.contenedorRef.doc(id).delete();
  }
}
