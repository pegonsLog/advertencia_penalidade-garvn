import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../interface/irregularidade';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { IrregularidadeService } from '../irregularidade/irregularidade.service';
import { AgenteService } from '../agente/agente.service';
import { ConsorcioService } from '../consorcio/consorcio.service';
import { InfracaoService } from '../infracao/infracao.service';
import { LinhaService } from '../linha/linha.service';
import { VeiculoService } from '../veiculo/veiculo.service';
import { IAgentes } from '../../interface/agente';
import { IConsorcios } from '../../interface/consorcio';
import { IInfracoes } from '../../interface/infracao';
import { ILinhas } from '../../interface/linha';
import { IVeiculos } from '../../interface/veiculo';

@Component({
  selector: 'app-imprimir',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './imprimir.component.html',
  styleUrl: './imprimir.component.scss',
})
export class ImprimirComponent implements OnDestroy {
  #route = inject(Router);
  #irreguaridadeService = inject(IrregularidadeService);
  #linhaService = inject(LinhaService);
  #infracaoService = inject(InfracaoService);
  #veiculoService = inject(VeiculoService);
  #consorcioService = inject(ConsorcioService);
  #agenteService = inject(AgenteService);

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

  private subscription = new Subscription();

  public notificacoes: IIrregularidades = [];

  constructor() {
    this.subscription = this.#irreguaridadeService
      .list()
      .pipe(
        map((irregularidades: IIrregularidades) =>
          irregularidades
            .filter((i: IIrregularidade) => i.numeroIrregularidade !== '1')
            .sort(
              (a: IIrregularidade, b: IIrregularidade) =>
                Number(b.numeroIrregularidade) - Number(a.numeroIrregularidade)
            )
        )
      )
      .subscribe(
        (irregularidades: IIrregularidades) =>
          (this.notificacoes = irregularidades)
      );
  }

  voltar() {
    this.#route.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  validarLinha(numeroLinha: string) {
    const valorCampo = numeroLinha;

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

  validarInfracao(codigoInfracao: string) {
    const valorCampo = codigoInfracao
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
  validarVeiculo(numeroVeiculo: string) {
    const valorCampo = numeroVeiculo
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
  validarConsorcio(numeroConsorcio: string) {
    const valorCampo = numeroConsorcio
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
  validarAgente(matriculaAgente: string) {
    const valorCampo = matriculaAgente
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
