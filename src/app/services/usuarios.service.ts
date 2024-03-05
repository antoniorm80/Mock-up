import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Usuarios from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario: Usuarios) {
    const placeRef = collection(this.firestore, 'usuario');
    return addDoc(placeRef, usuario);
  }
}
