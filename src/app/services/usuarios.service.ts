import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import Usuarios from '../interfaces/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario: Usuarios) {
    const placeRef = collection(this.firestore, 'usuario');
    return addDoc(placeRef, usuario);
  }

  getusuarios(): Observable<Usuarios[]> {
    const placeRef = collection(this.firestore, 'usuario');
    return collectionData(placeRef, { idField: 'id'}) as Observable<Usuarios[]>;
  }

  deleteUsuario(usuario: Usuarios) {
    const placeRef = doc(this.firestore, `usuario/${usuario.id}`);
    return deleteDoc(placeRef);
  }

}
