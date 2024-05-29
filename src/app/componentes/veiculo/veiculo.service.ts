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
import { IVeiculo, IVeiculos } from '../../interface/veiculo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  firestore: Firestore = inject(Firestore);
  http: HttpClient = inject(HttpClient);

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

  loadVehicles() {
    this.http.get('/home/pegons/apps/advertencia-penalidade/src/app/veiculosJson.ts')
      .subscribe(data => {
        const parsedData = JSON.parse(data) as IVeiculos;

        if (!Array.isArray(parsedData)) {
          throw new Error('Formato de JSON inválido');
        }

        // Utilize o array parsedData como um array de IVeiculos
        console.log(parsedData);
      });
  }

}
