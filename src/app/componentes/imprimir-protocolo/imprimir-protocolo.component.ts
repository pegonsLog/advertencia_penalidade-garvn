import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { IrregularidadeService } from '../irregularidade/irregularidade.service';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../interface/irregularidade';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-imprimir-protocolo',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './imprimir-protocolo.component.html',
  styleUrl: './imprimir-protocolo.component.scss',
})
export class ImprimirProtocoloComponent implements OnDestroy {
  #activatedRoute = inject(ActivatedRoute);
  #irregularidadeService = inject(IrregularidadeService);
  numeroNotificacoesProtocolo: string[] = [];
  numeroNotificacaoProtocoloUnitaria: string[] = [];
  dataProtocolo: Date = new Date();
  dataCabecalho: string = '';
  ordem: number = 0;
  dataConferencia: string = '';
  subscription: Subscription = new Subscription();

  constructor() {
    const dataEmissaoProtocolo = new Date();
    this.dataCabecalho = this.formatarData(dataEmissaoProtocolo);
    const tipo = this.#activatedRoute.snapshot.queryParams['tipo'];
    this.dataConferencia =
      this.#activatedRoute.snapshot.queryParams['dataConferencia'];
    const dataInicio: string =
      this.#activatedRoute.snapshot.queryParams['dataInicio'];
    const dataFim: string =
      this.#activatedRoute.snapshot.queryParams['dataFim'];

    if (tipo === 'porLote') {
      this.subscription = this.#irregularidadeService
        .list()
        .pipe(
          map((irregs: IIrregularidades) =>
            irregs.forEach((irreg: IIrregularidade) => {
              if (
                this.formatDate(irreg.prazoCumprimentoConferencia) >=
                  this.formatDate(dataInicio) &&
                this.formatDate(irreg.prazoCumprimentoConferencia) <=
                  this.formatDate(dataFim)
              ) {
                this.numeroNotificacoesProtocolo.push(
                  irreg.numeroIrregularidade
                );
              }
            })
          )
        )
        .subscribe(() => {return this.numeroNotificacoesProtocolo});
    }
    if (tipo === 'unitaria') {
      this.numeroNotificacoesProtocolo.push(
        this.#activatedRoute.snapshot.queryParams['protocolosNotificacao']
      );
    }
  }

  formatarData(data: Date) {
    const dataEmissaoProtocolo = new Date();
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    const dia = dataEmissaoProtocolo.getDate();
    const mes = meses[dataEmissaoProtocolo.getMonth()];
    const ano = dataEmissaoProtocolo.getFullYear();
    return `${dia} de ${mes} de ${ano}`;
  }

  formatDate(dateString: string): Date {
    let [day, month, year] = dateString.split('/').map(Number);
    let date = new Date(year, month - 1, day);
    return date;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
