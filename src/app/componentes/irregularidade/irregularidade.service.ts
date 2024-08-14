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
import { from, Observable } from 'rxjs';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../interface/irregularidade';

@Injectable({
  providedIn: 'root',
})
export class IrregularidadeService {
  firestore: Firestore = inject(Firestore);

  irregularidades: IIrregularidades = [];
  irregularidade: IIrregularidade = {
    id: '',
    numeroIrregularidade: '',
    dataIrregularidade: '',
    horario: '',
    local: '',
    numeroLocal: '',
    bairro: '',
    descricao: '',
    codigoInfracao: '',
    numeroLinha: '',
    numeroVeiculo: '',
    dataEmissao: '',
    prazoCumprimentoConferencia: '',
    matAgenteConferente: '',
    matriculaAgente: ''
  };
  id: string = '';

  list() {
    let $irregularidadesRef = collection(this.firestore, 'irregularidades');
    return collectionData($irregularidadesRef, {
      idField: 'id',
    }) as Observable<IIrregularidades>;
  }

  umaIrregularidade(id: string) {
    let $irregularidadeRef = doc(this.firestore, 'irregularidades', id);
    return docData($irregularidadeRef, {
      idField: 'id',
    }) as Observable<IIrregularidade>;
  }

  addIrregularidade(irregularidade: IIrregularidade) {
    let $irregularidadeRef = collection(this.firestore, 'irregularidades');
    return addDoc($irregularidadeRef, irregularidade);
  }

  updateIrregularidade(id: string, irregularidade: IIrregularidade): Observable<void> {
    const $irregularidadeRef = doc(
      this.firestore,
      'irregularidades',
      id
    );
  return from(updateDoc($irregularidadeRef, {
      numeroIrregularidade: irregularidade.numeroIrregularidade,
      matriculaAgente: irregularidade.matriculaAgente,
      matAgenteConferente: irregularidade.matAgenteConferente,
      dataIrregularidade: irregularidade.dataIrregularidade,
      horario: irregularidade.horario,
      local: irregularidade.local,
      numeroLocal: irregularidade.numeroLocal,
      bairro: irregularidade.bairro,
      descricao: irregularidade.descricao,
      codigoInfracao: irregularidade.codigoInfracao,
      numeroLinha: irregularidade.numeroLinha,
      numeroVeiculo: irregularidade.numeroVeiculo,
      dataEmissao: irregularidade.dataEmissao,
      prazoCumprimentoConferencia: irregularidade.prazoCumprimentoConferencia
    }))
  }

  async deleteIrregularidade(id: string) {
    let $irregularidadeRef = doc(this.firestore, 'irregularidades', id);

    return deleteDoc($irregularidadeRef);
  }
}
