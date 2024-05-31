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
import { IVeiculo, IVeiculos } from '../../interface/veiculo';
import { Injectable, inject } from '@angular/core';
import { ExportarVeiculos } from '../../veiculosParaFirestore';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  firestore: Firestore = inject(Firestore);
  exportarFirestore: ExportarVeiculos = inject(ExportarVeiculos);

  veiculos: IVeiculos = [];
  veiculo: IVeiculo = {
    id: '',
    numeroVeiculo: '',
    placa: '',
    tipo: '',
    operadora: ''
  };
  id: string = '';

  list() {
    let $veiculosRef = collection(this.firestore, 'veiculos');
    return collectionData($veiculosRef, {
      idField: 'id',
    }) as Observable<IVeiculos>;
  }

  umVeiculo(id: string) {
    let $veiculoRef = doc(this.firestore, 'veiculos', id);
    return docData($veiculoRef, {
      idField: 'id',
    }) as Observable<IVeiculo>;
  }

  addVeiculo(veiculo: IVeiculo) {
    let $veiculoRef = collection(this.firestore, 'veiculos');
    return addDoc($veiculoRef, veiculo);
  }

  async updateVeiculo(veiculo: IVeiculo) {
    const $veiculoRef = doc(this.firestore, 'veiculos', veiculo.id);
    await updateDoc($veiculoRef, {
      numeroVeiculo: veiculo.numeroVeiculo,
     placa: '',
    tipo: '',
    operadora: ''
    });
  }

  async deleteVeiculo(id: string) {
    let $veiculoRef = doc(this.firestore, 'veiculos', id);

    return deleteDoc($veiculoRef);
  }

}
