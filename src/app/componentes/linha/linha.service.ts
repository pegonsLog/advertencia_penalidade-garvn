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
import { ILinha, ILinhas } from '../../interface/linha';

@Injectable({
  providedIn: 'root',
})
export class LinhaService {

  firestore: Firestore = inject(Firestore);

  linhas: ILinhas = [];
  linha: ILinha = {
    id: '',
    numeroLinha: '',
    nomeLinha: '',
  };
  id: string = '';

  list() {
    let $linhasRef = collection(this.firestore, 'linhas');
    return collectionData($linhasRef, {
      idField: 'id',
    }) as Observable<ILinhas>;
  }

  umaLinha(id: string) {
    let $linhaRef = doc(this.firestore, 'linhas', id);
    return docData($linhaRef, {
      idField: 'id',
    }) as Observable<ILinha>;
  }

  async addLinha(linha: ILinha) {
    let $linhaRef = collection(this.firestore, 'linhas');
    return await addDoc($linhaRef, linha as ILinha);
  }

  async updateLinha(linha: ILinha) {
    const $linhaRef = doc(this.firestore, 'linhas', linha.id);
    await updateDoc($linhaRef, {
      numeroLinha: linha.numeroLinha,
      nomeLinha: linha.nomeLinha,
    });
  }

  async deleteLinha(id: string) {
    let $linhaRef = doc(this.firestore, 'linhas', id);

    return deleteDoc($linhaRef);
  }
}
