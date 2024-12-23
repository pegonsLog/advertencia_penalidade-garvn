import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFiscalizacao } from '../../../interface/fiscalizacao';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { FiscalizacaoService } from '../fiscalizacao.service';

@Component({
  selector: 'app-fiscalizacao-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './fiscalizacao-form.component.html',
  styleUrl: './fiscalizacao-form.component.scss',
})
export class FiscalizacaoFormComponent {
  #fb = inject(FormBuilder);
  #fiscalizacaoService = inject(FiscalizacaoService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  fiscalizacaoForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  public fiscalizacao = signal<IFiscalizacao>({
    id: '',
    matriculaAgente: '',
    nomeAgente: '',
    dataEmissao: '',
    dataConferencia: '',
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#fiscalizacaoService
        .umaFiscalizacao(id)
        .subscribe((result: IFiscalizacao) => {
          this.fiscalizacaoForm = this.#fb.group({
            id: [result.id],
            matriculaAgente: [result.matriculaAgente, Validators.required],
            nomeAgente: [result.nomeAgente, Validators.required],
            dataEmissao: [result.dataEmissao, Validators.required],
            dataConferencia: [result.dataConferencia, Validators.required],
          });
        });
    }

    this.fiscalizacaoForm = this.#fb.group({
      matriculaAgente: ['', Validators.required],
      nomeAgente: ['', Validators.required],
      dataEmissao: ['', Validators.required],
      dataConferencia: ['', Validators.required],
    });
  }

  onNew() {
    this.#fiscalizacaoService
      .addFiscalizacao(this.fiscalizacaoForm.getRawValue())
      .then(() => {
        this.#route.navigate(['fiscalizacaoLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#fiscalizacaoService
      .updateFiscalizacao(this.fiscalizacaoForm.getRawValue())
      .then(() => {
        this.#route.navigate(['fiscalizacaoLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar fiscalização:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['fiscalizacaoLista']);
  }

  ngOnInit(): void {}

  agenteFormEdit(result: IFiscalizacao) {
    this.fiscalizacaoForm = this.#fb.group({
      matriculaAgente: [result.matriculaAgente, Validators.required],
      nomeAgente: [result.nomeAgente, Validators.required],
      dataEmissao: [result.dataEmissao, Validators.required],
      dataConferencia: [result.dataConferencia, Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
