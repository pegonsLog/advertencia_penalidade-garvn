import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject, signal } from '@angular/core';
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
  templateUrl: './irregularidade-lista.component.html',
  styleUrl: './irregularidade-lista.component.scss',
})
export class IrregularidadeListaComponent implements OnDestroy {
  #irregularidadeService = inject(IrregularidadeService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  dialog = inject(MatDialog);
  isLoading = true;
  numeroNotificacao = '';

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
    prazoCumprimento: '',
    dataCumprimento: '',
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
    'dataEmissao',
    'prazoCumprimento',
    'dataCumprimento',
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
    const dataInicio = this.#activatedRoute.snapshot.queryParams['dataInicio'];
    const dataFim = this.#activatedRoute.snapshot.queryParams['dataFim'];

    if (porNumero) {
      this.carregarListaPorNumeroNotificacao();
    }
    if (porPeriodo) {
      this.#irregularidadeService
        .list()
        .pipe(
          map((irregularidades: IIrregularidade[]) => {

            return irregularidades.filter((irr: IIrregularidade) => {
              const dataIrregularidade = this.converterStringEmDate(
                irr.dataIrregularidade

              );
              // console.log(irr.dataIrregularidade)
              console.log(dataIrregularidade)
              // return (
              //   dataIrregularidade >= dataInicio &&
              //   dataIrregularidade <= dataFim
              // );

            });
          })
        )
        .subscribe((i: any) => {
          this.dataSource = new MatTableDataSource(this.irregularidades);
          this.contador = this.irregularidades.length;
          this.isLoading = false;
        });
    }
  }

  add() {
    this.#route.navigate(['irregularidadeAdicionar']);
  }

  edit(id: string) {
    this.#route.navigate(['irregularidadeAlterar'], {
      queryParams: { id: id },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#irregularidadeService
            .deleteIrregularidade(id)
            .then(() => {})
            .catch((err) => {
              console.log(err);
            });
        }
      });
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
    this.#route.navigate(['imprimir']);
  }

  carregarListaPorNumeroNotificacao() {
    const numeroNotificacao =
      this.#activatedRoute.snapshot.queryParams['numeroNotificacao'];
    this.#irregularidadeService
      .list()
      .pipe(
        map((i: IIrregularidades) =>
          i.filter(
            (irreg) =>
              irreg.numeroIrregularidade.toString() === numeroNotificacao
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

  converterStringEmDate(data: string) {
    // let customDateString = data;
    // let parts = customDateString.split('/');

    // let day = parseInt(parts[0], 10);
    // let month = parseInt(parts[1], 10) - 1;
    // let year = parseInt(parts[2], 10);
    let date = new Date(data);
    return date;
  }
}
