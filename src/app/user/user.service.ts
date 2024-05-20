import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUsuario, IUsuarios } from '../interface/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firestore: Firestore = inject(Firestore);

  users: IUsuarios = [];
  user: IUsuario = {
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  };
  id: string = '';

  list() {
    let $certificateRef = collection(this.firestore, 'users');
    return collectionData($certificateRef, {
      idField: 'id',
    }) as Observable<IUsuarios>;
  }

  oneUser(id: string) {
    let $certificateRef = doc(this.firestore, 'users', id);
    return docData($certificateRef, {
      idField: 'id',
    }) as Observable<IUsuario>;
  }

  addUser(usuario: IUsuario) {
    let $userRef = collection(this.firestore, 'users');
    return addDoc($userRef, usuario);
  }

  async updateUser(usuario: IUsuario,) {
    const $userRef = doc(this.firestore, 'users', usuario.id);
    await updateDoc($userRef, {
      usuario: usuario.matricula,
      nome: usuario.nome,
      perfil: usuario.perfil,
      senha: usuario.senha,
    });
  }

  async deleteUser(id: string) {
    let $userRef = doc(this.firestore, 'users', id);

    return deleteDoc($userRef);
  }
}
