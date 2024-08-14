import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Subscription } from 'rxjs';
import { IAgentes } from '../../../interface/agente';
import { IInfracoes } from '../../../interface/infracao';
import {
  IIrregularidade
} from '../../../interface/irregularidade';
import { ILinhas } from '../../../interface/linha';
import { IVeiculos } from '../../../interface/veiculo';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { AgenteService } from '../../agente/agente.service';
import { InfracaoService } from '../../infracao/infracao.service';
import { LinhaService } from '../../linha/linha.service';
import { VeiculoService } from '../../veiculo/veiculo.service';
import { IrregularidadeService } from '../irregularidade.service';

@Component({
  selector: 'app-irregularidade-alterar',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './irregularidade-alterar.component.html',
  styleUrl: './irregularidade-alterar.component.scss',
})
export class IrregularidadeAlterarComponent {
  #fb = inject(FormBuilder);
  #irregularidadeService = inject(IrregularidadeService);
  #linhaService = inject(LinhaService);
  #infracaoService = inject(InfracaoService);
  #veiculoService = inject(VeiculoService);
  #agenteService = inject(AgenteService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  linhaValidacao: string = '';
  infracaoValidacao: string = '';
  veiculoValidacao: string = '';
  agenteValidacao: string = '';

  condicaoValidacaoLinha: boolean = true;
  condicaoValidacaoInfracao: boolean = true;
  condicaoValidacaoVeiculo: boolean = true;
  condicaoValidacaoAgente: boolean = true;

  irregularidadeForm: FormGroup = this.#fb.group({
    numeroIrregularidade: ['', Validators.required],
    dataIrregularidade: ['', Validators.required],
    horario: ['', Validators.required],
    matriculaAgente: ['', Validators.required],
    local: ['', Validators.required],
    numeroLocal: ['', Validators.required],
    bairro: ['', Validators.required],
    descricao: ['', Validators.required],
    codigoInfracao: ['', Validators.required],
    numeroConsorcio: ['', Validators.required],
    numeroVeiculo: ['', Validators.required],
    numeroLinha: ['', Validators.required],
    dataEmissao: ['', Validators.required],
    prazoCumprimentoConferencia: ['', Validators.required],
    matAgenteConferente: ['', Validators.required],
  });

  // typeForm = signal<string>('');
  numeroUltimaIrregularidade: number = 0;
  dataInicio: string = '';
  dataFim: string = '';
  numNotificacao: string = '';
  porPeriodo: string = '';
  porNumero: string = '';

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
    codigoInfracao: '',
    numeroConsorcio: '',
    numeroLinha: '',
    numeroVeiculo: '',
    dataEmissao: '',
    prazoCumprimentoConferencia: '',
    matAgenteConferente: '',
  };

  public veiculos: IVeiculos = [];

  constructor() {
    this.irregularidade.id = this.#activatedRoute.snapshot.queryParams['id'];
    this.dataInicio = this.#activatedRoute.snapshot.queryParams['dataInicio'];
    this.dataFim = this.#activatedRoute.snapshot.queryParams['dataFim'];
    this.porPeriodo = this.#activatedRoute.snapshot.queryParams['ehPorPeriodo'];
    this.porNumero = this.#activatedRoute.snapshot.queryParams['ehPorNumero'];

    this.subscription = this.#veiculoService
      .list()
      .subscribe((veiculos: IVeiculos) => {
        for (let v of veiculos) {
          this.veiculos.push(v);
        }
      });

    if (this.#activatedRoute.snapshot.queryParams['id']) {
      // this.typeForm.set('edit');
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
            matriculaAgente: [result.matriculaAgente, Validators.required],
            local: [result.local, Validators.required],
            numeroLocal: [result.numeroLocal, Validators.required],
            bairro: [result.bairro, Validators.required],
            descricao: [result.descricao, Validators.required],
            codigoInfracao: [result.codigoInfracao, Validators.required],
            numeroVeiculo: [result.numeroVeiculo, Validators.required],
            numeroLinha: [result.numeroLinha, Validators.required],
            dataEmissao: [result.dataEmissao, Validators.required],
            prazoCumprimentoConferencia: [
              result.prazoCumprimentoConferencia,
              Validators.required,
            ],
            matAgenteConferente: [
              result.matAgenteConferente,
              Validators.required,
            ],
          });
          this.validarAgente();
          this.validarLinha();
          this.validarInfracao();
          this.validarVeiculo();
        });
    }
  }

  onUpdate() {
    this.subscription = this.#irregularidadeService
      .updateIrregularidade(
        this.irregularidade.id,
        this.irregularidadeForm.getRawValue()
      )
      .subscribe(() => {
        alert('Registro atualizado com sucesso!');
        this.#route.navigate(['irregularidadeLista'], {
          queryParams: {
            ehPorPeriodo: this.porPeriodo,
            ehPorNumero: this.porNumero,
            dataInicio: this.dataInicio,
            dataFim: this.dataFim,
            numeroNotificacao: this.irregularidadeForm.getRawValue().numeroIrregularidade,
          },
        });

      });

  }
  voltar() {
    this.#route.navigate(['irregularidadeLista'], {
      queryParams: {
        ehPorPeriodo: this.porPeriodo,
        ehPorNumero: this.porNumero,
        dataInicio: this.dataInicio,
        dataFim: this.dataFim,
      },
    });
  }

  ngOnInit() {}

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
      matriculaAgente: [
        irregularidadeIIrregularidade.matriculaAgente,
        Validators.required,
      ],
      local: [irregularidadeIIrregularidade.local, Validators.required],
      numeroLocal: [
        irregularidadeIIrregularidade.numeroLocal,
        Validators.required,
      ],
      bairro: [irregularidadeIIrregularidade.bairro, Validators.required],
      descricao: [irregularidadeIIrregularidade.descricao, Validators.required],
      numeroInfracao: [
        irregularidadeIIrregularidade.codigoInfracao,
        Validators.required,
      ],
      numeroConsorcio: [
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
      dataEmissao: [
        irregularidadeIIrregularidade.dataEmissao,
        Validators.required,
      ],
      prazoCumprimentoConferencia: [
        irregularidadeIIrregularidade.prazoCumprimentoConferencia,
        Validators.required,
      ],
      matAgenteConferente: [
        irregularidadeIIrregularidade.matAgenteConferente,
        Validators.required,
      ],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  numerarNotificacao() {
    this.irregularidadeForm = this.#fb.group({
      numeroIrregularidade: [
        (this.numeroUltimaIrregularidade + 1).toString(),
        Validators.required,
      ],
      dataIrregularidade: ['', Validators.required],
      horario: ['', Validators.required],
      matriculaAgente: ['', Validators.required],
      local: ['', Validators.required],
      numeroLocal: ['', Validators.required],
      bairro: ['', Validators.required],
      descricao: ['', Validators.required],
      codigoInfracao: ['', Validators.required],
      numeroConsorcio: ['', Validators.required],
      numeroVeiculo: ['', Validators.required],
      numeroLinha: ['', Validators.required],
      dataEmissao: ['', Validators.required],
      prazoCumprimentoConferencia: ['', Validators.required],
      matAgenteConferente: ['', Validators.required],
    });
  }

  validarLinha() {
    const valorCampo = this.irregularidadeForm.get('numeroLinha')?.value;

    this.subscription = this.#linhaService
      .list()
      .subscribe((linhas: ILinhas) => {
        for (let l of linhas) {
          if (l.numeroLinha == valorCampo) {
            this.linhaValidacao = l.nomeLinha;
            this.condicaoValidacaoLinha = true;
            return;
          }
          this.condicaoValidacaoLinha = false;
          this.linhaValidacao = 'Linha não cadastrada';
        }
      });
  }

  validarInfracao() {
    const valorCampo = this.irregularidadeForm.get('codigoInfracao')?.value;
    this.condicaoValidacaoInfracao = true;

    this.subscription = this.#infracaoService
      .list()
      .subscribe((infracoes: IInfracoes) => {
        for (let i of infracoes) {
          if (i.codigoInfracao == valorCampo) {
            this.infracaoValidacao = i.nomeInfracao;
            this.condicaoValidacaoInfracao = true;
            return;
          }
        }
        this.condicaoValidacaoInfracao = false;

        this.infracaoValidacao = 'Infração não cadastrado';
      });
  }
  validarVeiculo() {
    const valorCampo = this.irregularidadeForm.get('numeroVeiculo')?.value;
    this.condicaoValidacaoVeiculo = true;

    for (let v of this.veiculos) {
      if (v.numeroVeiculo == valorCampo) {
        this.veiculoValidacao = v.placa;
        this.condicaoValidacaoVeiculo = true;
        return;
      }
      this.condicaoValidacaoVeiculo = false;
    }
    this.veiculoValidacao = 'Veículo não cadastrado';
  }
  validarAgente() {
    const valorCampo = this.irregularidadeForm.get('matriculaAgente')?.value;
    this.condicaoValidacaoAgente = true;

    this.subscription = this.#agenteService
      .list()
      .subscribe((agentes: IAgentes) => {
        for (let a of agentes) {
          if (a.matriculaAgenteFiscalizador === valorCampo) {
            this.agenteValidacao = a.nomeAgenteFiscalizador;
            this.condicaoValidacaoAgente = true;
            return;
          }
          this.condicaoValidacaoAgente = false;
        }
        this.agenteValidacao = 'Agente não cadastrado';
      });
  }
}
