import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import {
  IIrregularidade,
  IIrregularidades,
} from '../../../interface/irregularidade';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { IrregularidadeService } from '../irregularidade.service';

@Component({
  selector: 'app-irregularidade-lista',
  standalone: true,
  imports: [AngularMaterialModule, MatSortModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './irregularidade-lista.component.html',
  styleUrl: './irregularidade-lista.component.scss',
})
export class IrregularidadeListaComponent implements OnDestroy, OnInit {
  #irregularidadeService = inject(IrregularidadeService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  dialog = inject(MatDialog);
  isLoading = true;
  numeroNotificacao = '';
  dataInicio: string = '';
  dataFim: string = '';
  tipo: string = '';
  numNotificacao: string = '';

  filtradas: IIrregularidades = [];
  notificacoesProtocolo: string[] = [];

  irregularidades: IIrregularidades = [];

  irregularidade = signal<IIrregularidade>({
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
    prazoCumprimentoConferencia: '',
    matAgenteConferente: '',
    codigoInfracao: '',
    numeroConsorcio: '',
    numeroLinha: '',
    numeroVeiculo: '',
  });

  displayedColumns: string[] = [
    'numeroIrregularidade',
    'matriculaAgente',
    'dataIrregularidade',
    'horario',
    'local',
    'bairro',
    'descricao',
    'matAgenteConferente',
    'dataEmissao',
    'prazoCumprimentoConferencia',
    'codigoInfracao',
    'numeroConsorcio',
    'numeroLinha',
    'numeroVeiculo',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.irregularidades);
  contador = 0;

  subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator)
  paginator: MatPaginator | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    const porNumero = this.#activatedRoute.snapshot.queryParams['ehPorNumero'];
    const porPeriodo =
      this.#activatedRoute.snapshot.queryParams['ehPorPeriodo'];
    this.dataFim = this.#activatedRoute.snapshot.queryParams['dataFim'];
    this.dataInicio = this.#activatedRoute.snapshot.queryParams['dataInicio'];
    this.numNotificacao =
      this.#activatedRoute.snapshot.queryParams['numeroNotificacao'];

    if (porNumero) {
      this.carregarListaPorNumeroNotificacao(this.numNotificacao);
      return;
    }

    if (porPeriodo) {
      this.#irregularidadeService
        .list()
        .pipe(
          map((irregs: IIrregularidades) =>
            irregs.forEach((irreg: IIrregularidade) => {
              if (
                this.formatDate(irreg.dataIrregularidade) >=
                  this.formatDate(this.dataInicio) &&
                this.formatDate(irreg.dataIrregularidade) <=
                  this.formatDate(this.dataFim)
              ) {
                this.filtradas.push(irreg);
              }
            })
          )
        )
        .subscribe(() => {
          this.dataSource = new MatTableDataSource(this.filtradas);
          this.contador = this.filtradas.length;
          this.isLoading = false;
        });
    }
  }

  ngOnInit(): void {}

  add() {
    this.#route.navigate(['irregularidadeAdicionar']);
  }

  edit(numeroNotificacao: string) {
    this.#route.navigate(['irregularidadeAlterar'], {
      queryParams: { numeroNotificacao: numeroNotificacao },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference.afterClosed().subscribe(() =>
      this.#irregularidadeService
        .deleteIrregularidade(id)
        .then(() => {
          this.#route.navigate(['parametros']);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }

  voltar() {
    this.#route.navigate(['parametros']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.contador = this.dataSource._filterData(this.irregularidades).length;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  imprimir() {
    this.#route.navigate(['imprimir'], {
      queryParams: {
        dataInicio: this.dataInicio,
        dataFim: this.dataFim,
        tipo: 'lote',
      },
    });
  }
  imprimirUma(numeroNotificacao: string) {
    this.#route.navigate(['imprimir'], {
      queryParams: { numeroNotificacao: numeroNotificacao, tipo: 'unitaria' },
    });
  }

  carregarListaPorNumeroNotificacao(numeroNotif: string) {
    const numeroNotificacao = numeroNotif;
    this.#activatedRoute.snapshot.queryParams['numeroNotificacao'];
    this.#irregularidadeService
      .list()
      .pipe(
        map((i: IIrregularidades) =>
          i.filter(
            (irreg) =>
              irreg.numeroIrregularidade.toString() == numeroNotificacao
          )
        )
      )
      .subscribe((irregularidades: IIrregularidades) => {
        this.irregularidades = irregularidades;
        this.dataSource = new MatTableDataSource(this.irregularidades);
        this.contador = irregularidades.length;
        this.isLoading = false;
      });
  }

  formatDate(dateString: string): Date {
    let [day, month, year] = dateString.split('/').map(Number);
    let date = new Date(year, month - 1, day);
    return date;
  }

  imprimirProtocolo() {
    for (let f of this.filtradas) {
      this.notificacoesProtocolo.push(f.codigoInfracao);
    }
    this.#route.navigate(['imprimirProtocolo'], {
      queryParams: { protocolosNotificacao: this.notificacoesProtocolo },
    });
  }
}
