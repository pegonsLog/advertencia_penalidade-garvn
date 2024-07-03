import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../../interface/irregularidade';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { IrregularidadeService } from '../irregularidade.service';
import { LinhaService } from '../../linha/linha.service';
import { ILinhas } from '../../../interface/linha';
import { IInfracoes } from '../../../interface/infracao';
import { InfracaoService } from '../../infracao/infracao.service';
import { IVeiculos } from '../../../interface/veiculo';
import { VeiculoService } from '../../veiculo/veiculo.service';
import { IConsorcios } from '../../../interface/consorcio';
import { ConsorcioService } from '../../consorcio/consorcio.service';
import { AgenteService } from '../../agente/agente.service';
import { IAgentes } from '../../../interface/agente';

@Component({
  selector: 'app-irregularidade-form',
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
  templateUrl: './irregularidade-form.component.html',
  styleUrl: './irregularidade-form.component.scss',
})
export class IrregularidadeFormComponent implements OnDestroy, OnInit {
  #fb = inject(FormBuilder);
  #irregularidadeService = inject(IrregularidadeService);
  #linhaService = inject(LinhaService);
  #infracaoService = inject(InfracaoService);
  #veiculoService = inject(VeiculoService);
  #consorcioService = inject(ConsorcioService);
  #agenteService = inject(AgenteService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  linhaValidacao: string = '';
  infracaoValidacao: string = '';
  veiculoValidacao: string = '';
  consorcioValidacao: string = '';
  agenteValidacao: string = '';

  condicaoValidacaoLinha: boolean = true;
  condicaoValidacaoInfracao: boolean = true;
  condicaoValidacaoVeiculo: boolean = true;
  condicaoValidacaoConsorcio: boolean = true;
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
    prazoCumprimento: ['', Validators.required],
    dataCumprimento: ['', Validators.required],
  });

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
    codigoInfracao: '',
    numeroConsorcio: '',
    numeroLinha: '',
    numeroVeiculo: '',
    dataEmissao: '',
    prazoCumprimento: '',
    dataCumprimento: '',
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
            matriculaAgente: [result.matriculaAgente, Validators.required],
            local: [result.local, Validators.required],
            numeroLocal: [result.numeroLocal, Validators.required],
            bairro: [result.bairro, Validators.required],
            descricao: [result.descricao, Validators.required],
            codigoInfracao: [result.codigoInfracao, Validators.required],
            numeroConsorcio: [result.numeroConsorcio, Validators.required],
            numeroVeiculo: [result.numeroVeiculo, Validators.required],
            numeroLinha: [result.numeroLinha, Validators.required],
            dataEmissao: [result.dataEmissao, Validators.required],
            prazoCumprimento: [result.prazoCumprimento, Validators.required],
            dataCumprimento: [result.dataCumprimento, Validators.required],
          });
          this.validarAgente()
          this.validarLinha();
          this.validarInfracao();
          this.validarVeiculo();
          this.validarConsorcio();
        });
    } else {
      this.subscription = this.#irregularidadeService
        .list()
        .subscribe((irr: IIrregularidades) => {
          const data = new Date().getFullYear();
          (this.numeroUltimaIrregularidade = irr
            .map((obj) =>
              Number(
                data.toString() +
                  obj.numeroIrregularidade.toString().padStart(5, '0').substring(4)
              )
            )
            .reduce(
              (max, current) => (current > max ? current : max),
              Number.NEGATIVE_INFINITY
            )),
            (this.irregularidadeForm = this.#fb.group({
              numeroIrregularidade: [
                this.numeroUltimaIrregularidade + 1,
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
              prazoCumprimento: ['', Validators.required],
              dataCumprimento: ['', Validators.required],
            }));
        });
      }

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
      dataEmissao: [
        irregularidadeIIrregularidade.dataEmissao,
        Validators.required,
      ],
      prazoCumprimento: [
        irregularidadeIIrregularidade.prazoCumprimento,
        Validators.required,
      ],
      dataCumprimento: [
        irregularidadeIIrregularidade.dataCumprimento,
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
      prazoCumprimento: ['', Validators.required],
      dataCumprimento: ['', Validators.required],
    });
  }

  validarLinha() {
    const valorCampo = this.irregularidadeForm.get('numeroLinha')?.value;

    this.subscription = this.#linhaService
      .list()
      .subscribe((linhas: ILinhas) => {
        for (let l of linhas) {
          if (l.numeroLinha === valorCampo) {
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
          if (i.codigoInfracao === valorCampo) {
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

    this.subscription = this.#veiculoService
      .list()
      .subscribe((veiculos: IVeiculos) => {
        for (let v of veiculos) {
          if (v.numeroVeiculo === valorCampo) {
            this.veiculoValidacao = v.placa;
            this.condicaoValidacaoVeiculo = true;
            return;
          }
          this.condicaoValidacaoVeiculo = false;
        }
        this.veiculoValidacao = 'Veículo não cadastrado';
      });
  }
  validarConsorcio() {
    const valorCampo = this.irregularidadeForm.get('numeroConsorcio')?.value;
    this.condicaoValidacaoConsorcio = true;

    this.subscription = this.#consorcioService
      .list()
      .subscribe((consorcios: IConsorcios) => {
        for (let c of consorcios) {
          if (c.numeroConsorcio === valorCampo) {
            this.consorcioValidacao = c.nomeConsorcio;
            this.condicaoValidacaoConsorcio = true;
            return;
          }
          this.condicaoValidacaoConsorcio = false;
        }
        this.consorcioValidacao = 'Consórcio não cadastrado';
      });
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
