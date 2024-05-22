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
import { IFiscalizacao, IFiscalizacoes } from '../../interface/fiscalizacao';

@Injectable({
  providedIn: 'root',
})
export class FiscalizacaoService {
  firestore: Firestore = inject(Firestore);

  fiscalizacoes: IFiscalizacoes = [];
  fiscalizacao: IFiscalizacao = {
    id: '',
    matriculaAgente: '',
    nomeAgente: '',
    dataEmissao: '',
    dataConferencia: '',
  };
  id: string = '';

  list() {
    let $fiscalizacoesRef = collection(this.firestore, 'fiscalizacoes');
    return collectionData($fiscalizacoesRef, {
      idField: 'id',
    }) as Observable<IFiscalizacoes>;
  }

  umaFiscalizacao(id: string) {
    let $fiscalizacaoRef = doc(this.firestore, 'fiscalizacoes', id);
    return docData($fiscalizacaoRef, {
      idField: 'id',
    }) as Observable<IFiscalizacao>;
  }

  addFiscalizacao(fiscalizacao: IFiscalizacao) {
    let $fiscalizacaoRef = collection(this.firestore, 'fiscalizacoes');
    return addDoc($fiscalizacaoRef, fiscalizacao);
  }

  async updateFiscalizacao(fiscalizacao: IFiscalizacao) {
    const $fiscalizacaoRef = doc(
      this.firestore,
      'fiscalizacoes',
      fiscalizacao.id
    );
    await updateDoc($fiscalizacaoRef, {
      matriculaAgente: fiscalizacao.matriculaAgente,
      nomeAgente: fiscalizacao.nomeAgente,
      dataEmissao: fiscalizacao.dataEmissao,
      dataConferencia: fiscalizacao.dataConferencia,
    });
  }

  async deleteFiscalizacao(id: string) {
    let $fiscalizacaoRef = doc(this.firestore, 'fiscalizacoes', id);

    return deleteDoc($fiscalizacaoRef);
  }
}
