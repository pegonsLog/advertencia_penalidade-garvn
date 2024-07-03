import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  dialog = inject(MatDialog);
  isLoading = true;

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
    numeroVeiculo: ''
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
    this.#irregularidadeService
      .list()
      .pipe(map((i: IIrregularidades) => i.filter(irreg => irreg.numeroIrregularidade !== "1")))
      .subscribe((irregularidades: IIrregularidades) => {
        this.irregularidades = irregularidades;
        this.dataSource = new MatTableDataSource(this.irregularidades);
        this.contador = irregularidades.length;
        this.isLoading = false;
      });
  }

  add() {
    this.#route.navigate(['irregularidadeForm']);
  }
  edit(id: string) {
    this.#route.navigate(['irregularidadeForm'], {
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
            .then(() => {
              alert('Registro excluído com sucesso!');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }
  voltar() {
    this.#route.navigate(['home']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.contador = this.dataSource._filterData(this.irregularidades).length;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
