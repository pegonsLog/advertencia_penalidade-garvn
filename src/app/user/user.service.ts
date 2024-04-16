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
  updateDoc
} from 'firebase/firestore/lite';
import { IUsuario } from '../interface/usuario';
import { firebaseConfig } from '../shared/firestore-config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);

  constructor() {}

  async list() {
    const q = query(collection(this.db, 'users'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }

  async oneUser() {
    const docRef = doc(this.db, 'users', '...');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  async addUser(data: IUsuario) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(this.db, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
  }

  async updateUser() {
    const washingtonRef = doc(this.db, 'users', '...');

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      capital: true,
    });
  }

  async deleteUser(){
    await deleteDoc(doc(this.db, "users", "..."));
  }
}
