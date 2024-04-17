import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore/lite';
import { IUsuario, IUsuarios } from '../interface/usuario';
import { firebaseConfig } from '../shared/firestore-config/firestore-config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);

  users: IUsuarios = [];
  user: IUsuario = {
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  };
  id: string = '';

  constructor() {}

  async list() {
    const q = query(collection(this.db, 'users'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.users.push(doc.data() as IUsuario);
    });
    return this.users;
  }

  async oneUser(matricula: string): Promise<IUsuario> {

    const q = query(
      collection(this.db, 'users'),
      where('matricula', '==', matricula)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if(doc.exists()){
        this.user = doc.data() as IUsuario;
      }
    });

    return this.user
  }

  async addUser(data: IUsuario) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(this.db, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
  }

  async updateUser(id: string) {
    const userRef = doc(this.db, 'users', id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      capital: true,
    });
  }

  async deleteUser() {
    await deleteDoc(doc(this.db, 'users', '...'));
  }
}
