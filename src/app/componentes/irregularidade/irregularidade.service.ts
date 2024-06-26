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
    numeroIrregularidade: '',
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
      numeroIrregularidade: irregularidade.numeroIrregularidade,
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

  padWithZeros(numeroNotificacao: string): any {
    const ano = new Date();
    // Converter o número para string
    let numberStr = numeroNotificacao

    // Verificar se o número está entre 0 e 9999999
    if (/^\d{1,7}$/.test(numberStr)) {
        // Preencher com zeros à esquerda até ter 7 dígitos
        return ano.getFullYear() + numberStr.padStart(7, '0')
    } else {
        alert("Número fora do intervalo permitido (0-9999999)");
    }
  }
}
