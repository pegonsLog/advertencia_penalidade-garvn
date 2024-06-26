import { Component, OnChanges, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../../interface/irregularidade';
import { Subscription, map } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IrregularidadeService } from '../irregularidade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-irregularidade-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './irregularidade-form.component.html',
  styleUrl: './irregularidade-form.component.scss',
})
export class IrregularidadeFormComponent implements OnDestroy, OnInit{
  #fb = inject(FormBuilder);
  #irregularidadeService = inject(IrregularidadeService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  irregularidadeForm: FormGroup = this.#fb.group({
    numeroIrregularidade: ['', Validators.required],
    dataIrregularidade: ['', Validators.required],
    horario: ['', Validators.required],
    local: ['', Validators.required],
    numeroLocal: ['', Validators.required],
    bairro: ['', Validators.required],
    descricao: ['', Validators.required],
    numeroInfracao: ['', Validators.required],
    numeroConsorcio: ['', Validators.required],
    numeroVeiculo: ['', Validators.required],
    numeroLinha: ['', Validators.required],
  })

  typeForm = signal<string>('');
  numeroUltimaIrregularidade: number = 0;

  id = signal<string>('');

  private subscription = new Subscription();

  public irregularidade = {
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



  constructor() {
    this.irregularidade.id = this.#activatedRoute.snapshot.queryParams['id'];


    if (this.#activatedRoute.snapshot.queryParams['id']) {
      this.typeForm.set('edit');
      this.subscription = this.#irregularidadeService
        .umaIrregularidade(this.irregularidade.id)
        .subscribe((result: IIrregularidade) => {
          this.irregularidadeForm = this.#fb.group({
            numeroIrregularidade: [
              result.numeroIrregularidade,
              Validators.required,
            ],
            dataIrregularidade: [
              result.dataIrregularidade,
              Validators.required,
            ],
            horario: [result.horario, Validators.required],
            local: [result.local, Validators.required],
            numeroLocal: [result.numeroLocal, Validators.required],
            bairro: [result.bairro, Validators.required],
            descricao: [result.descricao, Validators.required],
            numeroInfracao: [result.numeroInfracao, Validators.required],
            numeroConsorcio: [result.numeroConsorcio, Validators.required],
            numeroVeiculo: [result.numeroVeiculo, Validators.required],
            numeroLinha: [result.numeroLinha, Validators.required],
          });
        });
    }

    this.subscription = this.#irregularidadeService.list().subscribe((irr: IIrregularidades) => {this.numeroUltimaIrregularidade = irr.map(obj => Number(obj.numeroIrregularidade))
      .reduce((max, current) => (current > max ? current : max), Number.NEGATIVE_INFINITY),     this.irregularidadeForm = this.#fb.group({
        numeroIrregularidade: [this.numeroUltimaIrregularidade + 1, Validators.required],
        dataIrregularidade: ['', Validators.required],
        horario: ['', Validators.required],
        local: ['', Validators.required],
        numeroLocal: ['', Validators.required],
        bairro: ['', Validators.required],
        descricao: ['', Validators.required],
        numeroInfracao: ['', Validators.required],
        numeroConsorcio: ['', Validators.required],
        numeroVeiculo: ['', Validators.required],
        numeroLinha: ['', Validators.required],
      });})

  }

  onNew() {
    this.#irregularidadeService
    
      .addIrregularidade(this.irregularidadeForm.getRawValue())
      .then(() => {
   
        this.#route.navigate(['irregularidadeLista']);
        this.irregularidadeForm.reset();
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar irregularidade:', error);
        alert('Erro ao adicionar o registro');
      });
  }

  onUpdate() {
    this.#irregularidadeService
      .updateIrregularidade(
        this.irregularidade.id,
        this.irregularidadeForm.getRawValue()
      )
      .then(() => {
        this.#route.navigate(['irregularidadeLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar irregularidade:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['irregularidadeLista']);
  }

  ngOnInit() {
    // this.numerarNotificacao()
  }

  irregularidadeIIrregularidadeFormEdit(
    irregularidadeIIrregularidade: IIrregularidade
  ) {
    this.irregularidadeForm = this.#fb.group({
      numeroIrregularidade: [
        irregularidadeIIrregularidade.numeroIrregularidade,
        Validators.required,
      ],
      dataIrregularidade: [
        irregularidadeIIrregularidade.dataIrregularidade,
        Validators.required,
      ],
      horario: [irregularidadeIIrregularidade.horario, Validators.required],
      local: [irregularidadeIIrregularidade.local, Validators.required],
      numeroLocal: [
        irregularidadeIIrregularidade.numeroLocal,
        Validators.required,
      ],
      bairro: [irregularidadeIIrregularidade.bairro, Validators.required],
      descricao: [irregularidadeIIrregularidade.descricao, Validators.required],
      numeroInfracao: [
        irregularidadeIIrregularidade.numeroInfracao,
        Validators.required,
      ],
      numeroConsorcio: [
        irregularidadeIIrregularidade.numeroConsorcio,
        Validators.required,
      ],
      numeroVeiculo: [
        irregularidadeIIrregularidade.numeroVeiculo,
        Validators.required,
      ],
      numeroLinha: [
        irregularidadeIIrregularidade.numeroLinha,
        Validators.required,
      ],
    });
  }

      ngOnDestroy(): void {
        this.subscription.unsubscribe();
      }

      numerarNotificacao(){
        this.irregularidadeForm = this.#fb.group({
          numeroIrregularidade: [(this.numeroUltimaIrregularidade + 1).toString(), Validators.required],
          dataIrregularidade: ['', Validators.required],
          horario: ['', Validators.required],
          local: ['', Validators.required],
          numeroLocal: ['', Validators.required],
          bairro: ['', Validators.required],
          descricao: ['', Validators.required],
          numeroInfracao: ['', Validators.required],
          numeroConsorcio: ['', Validators.required],
          numeroVeiculo: ['', Validators.required],
          numeroLinha: ['', Validators.required],
        });

      }

  }


