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
import { IInfracao, IInfracoes } from '../../interface/infracao';

@Injectable({
  providedIn: 'root',
})
export class InfracaoService {
  firestore: Firestore = inject(Firestore);

  infracoes: IInfracoes = [];
  linha: IInfracao = {
    id: '',
    codigoInfracao: '',
    nomeInfracao: '',
  };
  id: string = '';

  list() {
    let $infracoesRef = collection(this.firestore, 'infracoes');
    return collectionData($infracoesRef, {
      idField: 'id',
    }) as Observable<IInfracoes>;
  }

  umaInfracao(id: string) {
    let $infracoesRef = doc(this.firestore, 'infracoes', id);
    return docData($infracoesRef, {
      idField: 'id',
    }) as Observable<IInfracao>;
  }

  async addInfracao(infracao: IInfracao) {
    let $infracaoRef = collection(this.firestore, 'infracoes');
    return await addDoc($infracaoRef, infracao);
  }

  async updateInfracao(infracao: IInfracao) {
    const $infracoesRef = doc(this.firestore, 'infracoes', infracao.id);
    await updateDoc($infracoesRef, {
      codigoInfracao: infracao.codigoInfracao,
      nomeInfracao: infracao.nomeInfracao,
    });
  }

  async deleteInfracao(id: string) {
    let $infracoesRef = doc(this.firestore, 'infracoes', id);

    return deleteDoc($infracoesRef);
  }
}
