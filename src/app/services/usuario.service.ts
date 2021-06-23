import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Usuario } from "../modelos/usuario";
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private dbPath = '/usuariosParcialUno';
  usuariosRef : AngularFirestoreCollection<Usuario>
  usuarios: Observable<Usuario[]>;

  constructor(private db: AngularFirestore) { 
    this.usuariosRef = db.collection(this.dbPath);
    //obtener coleción de usuarios
    this.usuarios = this.usuariosRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  create(usuario:Usuario){
    return this.usuariosRef.add({...usuario});
   }

   getByEmail(email:string|null|undefined){
    return new Promise((resolve, reject) => {
      this.usuariosRef.get().subscribe((querySnapshot) => {
        let doc = querySnapshot.docs.find(doc => (doc.data() as Usuario).email == email);
        resolve(doc?.data());
      });
    });
   }

}
