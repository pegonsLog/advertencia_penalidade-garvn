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
    numeroConsorcio: '',
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

  async updateIrregularidade(id: string, irregularidade: IIrregularidade) {
    const $irregularidadeRef = doc(
      this.firestore,
      'irregularidades',
      id
    );
    try {
    await updateDoc($irregularidadeRef, {
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
      numeroConsorcio: irregularidade.numeroConsorcio,
      numeroLinha: irregularidade.numeroLinha,
      numeroVeiculo: irregularidade.numeroVeiculo,
      dataEmissao: irregularidade.dataEmissao,
      prazoCumprimentoConferencia: irregularidade.prazoCumprimentoConferencia
    })}catch (error) {
      console.error("Erro ao atualizar documento:", error);
    }
  }

  async deleteIrregularidade(id: string) {
    let $irregularidadeRef = doc(this.firestore, 'irregularidades', id);

    return deleteDoc($irregularidadeRef);
  }

  // padWithZeros(numeroNotificacao: string): any {
  //   const ano = new Date();
  //   // Converter o número para string
  //   let numberStr = numeroNotificacao

  //   // Verificar se o número está entre 0 e 9999999
  //   if (/^\d{1,7}$/.test(numberStr)) {
  //       // Preencher com zeros à esquerda até ter 7 dígitos
  //       return ano.getFullYear() + numberStr.padStart(7, '0')
  //   } else {
  //       alert("Número fora do intervalo permitido (0-9999999)");
  //   }
  // }

  // carregarListaPorPeriodoNotificacoes() {
  //   // const dataInicio = this.#activatedRoute.snapshot.queryParams['dataInicio'];

  //   // const dataFim = this.#activatedRoute.snapshot.queryParams['dataFim'];


  // }


}
