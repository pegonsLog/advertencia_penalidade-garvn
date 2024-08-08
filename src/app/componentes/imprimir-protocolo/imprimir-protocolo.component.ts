import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';

@Component({
  selector: 'app-imprimir-protocolo',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './imprimir-protocolo.component.html',
  styleUrl: './imprimir-protocolo.component.scss',
})
export class ImprimirProtocoloComponent {
  #activatedRoute = inject(ActivatedRoute);
  numeroNotificacoesProtocolo: string[] = [];
  numeroNotificacaoProtocoloUnitaria: string[] = [];
  dataProtocolo: Date = new Date();
  dataCabecalho: string = '';
  ordem: number = 0;
  dataConferencia: string = '';

  constructor() {
    const dataEmissaoProtocolo = new Date();
    this.dataCabecalho = this.formatarData(dataEmissaoProtocolo);
    const tipo = this.#activatedRoute.snapshot.queryParams['tipo'];

    if (tipo === 'porLote') {
      this.numeroNotificacoesProtocolo =
        this.#activatedRoute.snapshot.queryParams['protocolosNotificacao'];
    }
    if (tipo === 'unitaria') {
      this.numeroNotificacoesProtocolo.push(
        this.#activatedRoute.snapshot.queryParams['protocolosNotificacao']
      );
    }
    this.dataConferencia =
      this.#activatedRoute.snapshot.queryParams['dataConferencia'];
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
}
