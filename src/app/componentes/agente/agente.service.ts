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
import { IAgente, IAgentes } from '../../interface/agente';

@Injectable({
  providedIn: 'root',
})
export class AgenteService {
  firestore: Firestore = inject(Firestore);

  agentes: IAgentes = [];
  agente: IAgente = {
    id: '',
    matriculaAgenteFiscalizador: '',
    nomeAgenteFiscalizador: '',
    cargo: '',
    lotacao: '',
  };
  id: string = '';

  list() {
    let $$agentesRef = collection(this.firestore, 'agentes');
    return collectionData($$agentesRef, {
      idField: 'id',
    }) as Observable<IAgentes>;
  }

  umaAgente(id: string) {
    let $agenteRef = doc(this.firestore, 'agentes', id);
    return docData($agenteRef, {
      idField: 'id',
    }) as Observable<IAgente>;
  }

  addAgente(agente: IAgente) {
    let $agenteRef = collection(this.firestore, 'agentes');
    return addDoc($agenteRef, agente);
  }

  async updateAgente(agente: IAgente) {
    const $agenteRef = doc(this.firestore, 'agentes', agente.id);
    await updateDoc($agenteRef, {
      matriculaAgenteFiscalizador: agente.matriculaAgenteFiscalizador,
      nomeAgenteFiscalizador: agente.nomeAgenteFiscalizador,
      cargo: agente.cargo,
      lotacao: agente.lotacao,
    });
  }

  async deleteAgente(id: string) {
    let $agenteRef = doc(this.firestore, 'agentes', id);

    return deleteDoc($agenteRef);
  }
}
