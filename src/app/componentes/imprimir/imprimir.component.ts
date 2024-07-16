import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { IConsorcio, IConsorcios } from '../../interface/consorcio';
import { IInfracao, IInfracoes } from '../../interface/infracao';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../interface/irregularidade';
import { ILinha, ILinhas } from '../../interface/linha';
import { IVeiculo, IVeiculos } from '../../interface/veiculo';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { ConsorcioService } from '../consorcio/consorcio.service';
import { InfracaoService } from '../infracao/infracao.service';
import { IrregularidadeService } from '../irregularidade/irregularidade.service';
import { LinhaService } from '../linha/linha.service';
import { VeiculoService } from '../veiculo/veiculo.service';

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
  #activatedRoute = inject(ActivatedRoute);

  nomeLinha: string = '';
  descricaoInfracao: string = '';
  placaVeiculo: string = '';
  nomeConsorcio: string = '';

  private subscription = new Subscription();

  public notificacoes: IIrregularidades = [];
  public irregularidade = {
    id: '',
    numeroIrregularidade: '',
    matriculaAgente: '',
    dataIrregularidade: '',
    horario: '',
    local: '',
    numeroLocal: '',
    bairro: '',
    descricao: '',
    dataEmissao: '',
    prazoCumprimento: '',
    dataCumprimento: '',
    codigoInfracao: '',
    numeroConsorcio: '',
    numeroLinha: '',
    numeroVeiculo: '',
  };

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    this.subscription = this.#irreguaridadeService
      .umaIrregularidade(id)
      .pipe(
        map((irreg: IIrregularidade) => {
          this.irregularidade = irreg;
          this.validarLinha(irreg.numeroLinha);
          this.validarConsorcio(irreg.numeroConsorcio);
          this.validarInfracao(irreg.codigoInfracao);
          this.validarVeiculo(irreg.numeroVeiculo);
        })
      )
      .subscribe((arrayIrregularidade) => {
        console.log(arrayIrregularidade);
      });

    // this.subscription = this.#irreguaridadeService
    //   .list()
    //   .pipe(
    //     map((irregularidades: IIrregularidades) =>
    //       irregularidades
    //         .filter((i: IIrregularidade) => i.numeroIrregularidade !== '1')
    //         .sort(
    //           (a: IIrregularidade, b: IIrregularidade) =>
    //             Number(b.numeroIrregularidade) - Number(a.numeroIrregularidade)
    //         )
    //     )
    //   )
    //   .subscribe(
    //     (irregularidades: IIrregularidades) =>
    //       (this.notificacoes = irregularidades)
    //   );
  }

  voltar() {
    this.#route.navigate(['home']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  validarLinha(numeroLinha: string) {
    this.subscription = this.#linhaService
      .list()
      .pipe(
        map((linhas: ILinhas) =>
          linhas.forEach((linha: ILinha) => {
            if (linha.numeroLinha === numeroLinha) {
              this.nomeLinha = linha.nomeLinha;
            }
          })
        )
      )
      .subscribe(() => {});
  }

  validarInfracao(codigoInfracao: string) {
    this.subscription = this.#infracaoService
      .list()
      .pipe(
        map((infracoes: IInfracoes) =>
          infracoes.forEach((infracao: IInfracao) => {
            if (infracao.codigoInfracao === codigoInfracao) {
              this.descricaoInfracao = infracao.nomeInfracao;
            }
          })
        )
      )
      .subscribe(() => {});
  }

  validarVeiculo(numeroVeiculo: string) {
    this.subscription = this.#veiculoService
      .list()
      .pipe(
        map((veiculos: IVeiculos) =>
          veiculos.forEach((veiculo: IVeiculo) => {
            if (veiculo.numeroVeiculo === numeroVeiculo) {
              this.placaVeiculo = veiculo.placa;
            }
          })
        )
      )
      .subscribe(() => {});
  }
  
  validarConsorcio(numeroConsorcio: string) {
    this.subscription = this.#consorcioService
      .list()
      .pipe(
        map((consorcios: IConsorcios) =>
          consorcios.forEach((consorcio: IConsorcio) => {
            if (consorcio.numeroConsorcio === numeroConsorcio) {
              this.nomeConsorcio = consorcio.nomeConsorcio;
            }
          })
        )
      )
      .subscribe(() => {});
  }
}
