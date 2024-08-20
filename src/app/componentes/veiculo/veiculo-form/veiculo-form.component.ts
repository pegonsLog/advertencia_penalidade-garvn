import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVeiculo } from '../../../interface/veiculo';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './veiculo-form.component.html',
  styleUrl: './veiculo-form.component.scss',
})
export class VeiculoFormComponent implements OnDestroy {
  #fb = inject(FormBuilder);
  #veiculoService = inject(VeiculoService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  veiculoForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  veiculo = signal<IVeiculo>({
    id: '',
    numeroVeiculo: '',
    placa: '',
    operadora: '',
    consorcio: '',
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#veiculoService
        .umVeiculo(id)
        .subscribe((result: IVeiculo) => {
          this.veiculoForm = this.#fb.group({
            id: [result.id],
            numeroVeiculo: [result.numeroVeiculo, Validators.required],
            placa: [result.placa, Validators.required],
            operadora: [result.operadora, Validators.required],
            consorcio: [result.consorcio, Validators.required]
          });
        });
    }

    this.veiculoForm = this.#fb.group({
      numeroVeiculo: ['', Validators.required],
      placa: ['', Validators.required],
      operadora: ['', Validators.required],
      consorcio: ['', Validators.required],
    });
  }

  onNew() {
    this.#veiculoService
      .addVeiculo(this.veiculoForm.getRawValue())
      .then(() => {
        this.#route.navigate(['veiculoLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#veiculoService
      .updateVeiculo(this.veiculoForm.getRawValue())
      .then(() => {
        this.#route.navigate(['veiculoLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar veículo:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['veiculoLista']);
  }
  ngOnInit(): void {}

  userFormEdit(veiculo: IVeiculo) {
    this.veiculoForm = this.#fb.group({
      numeroVeiculo: [veiculo.numeroVeiculo, Validators.required],
      placa: [veiculo.placa, Validators.required],
      operadora: [veiculo.operadora, Validators.required],
      consorcio: [veiculo.consorcio, Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
