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
    dataIrregularidade: '',
    horario: '',
    local: '',
    numeroLocal: '',
    bairro: '',
    descricao: '',
    numeroInfracao: '',
    numeroConsorcio: '',
    numeroLinha: '',
    numeroVeiculo: '',
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

  async updateIrregularidade(id: string, irregularidade: IIrregularidade) {
    const $irregularidadeRef = doc(
      this.firestore,
      'irregularidades',
      id
    );
    await updateDoc($irregularidadeRef, {
      dataIrregularidade: irregularidade.dataIrregularidade,
      horario: irregularidade.horario,
      local: irregularidade.local,
      numeroLocal: irregularidade.numeroLocal,
      bairro: irregularidade.bairro,
      descricao: irregularidade.descricao,
      numeroInfracao: irregularidade.numeroInfracao,
      numeroConsorcio: irregularidade.numeroConsorcio,
      numeroLinha: irregularidade.numeroLinha,
      numeroVeiculo: irregularidade.numeroVeiculo,
    });
  }

  async deleteIrregularidade(id: string) {
    let $irregularidadeRef = doc(this.firestore, 'irregularidades', id);

    return deleteDoc($irregularidadeRef);
  }
}
