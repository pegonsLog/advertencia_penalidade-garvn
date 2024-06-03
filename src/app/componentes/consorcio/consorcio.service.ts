import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IConsorcio, IConsorcios } from '../../interface/consorcio';

@Injectable({
  providedIn: 'root',
})
export class ConsorcioService {
  firestore: Firestore = inject(Firestore);

  consorcios: IConsorcios = [];
  consorcio: IConsorcio = {
    id: '',
    numeroConsorcio: '',
    nomeConsorcio: '',
  };
  id: string = '';

  list() {
    let $consorciosRef = collection(this.firestore, 'consorcios');
    return collectionData($consorciosRef, {
      idField: 'id',
    }) as Observable<IConsorcios>;
  }

  umConsorcio(id: string) {
    let $consorcioRef = doc(this.firestore, 'consorcios', id);
    return docData($consorcioRef, {
      idField: 'id',
    }) as Observable<IConsorcio>;
  }

  addConsorcio(consorcio: IConsorcio) {
    let $consorcioRef = collection(this.firestore, 'consorcios');
    return addDoc($consorcioRef, consorcio);
  }

  async updateConsorcio(consorcio: IConsorcio) {
    const $consorcioRef = doc(this.firestore, 'consorcios', consorcio.id);
    await updateDoc($consorcioRef, {
      numeroConsorcio: consorcio.numeroConsorcio,
      nomeConsorcio: consorcio.nomeConsorcio,
    });
  }

  async deleteConsorcio(id: string) {
    let $consorcioRef = doc(this.firestore, 'consorcios', id);

    return deleteDoc($consorcioRef);
  }

}
