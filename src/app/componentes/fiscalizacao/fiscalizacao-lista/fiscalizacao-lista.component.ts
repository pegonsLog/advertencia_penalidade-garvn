import { Component, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFiscalizacao, IFiscalizacoes } from '../../../interface/fiscalizacao';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { FiscalizacaoService } from '../fiscalizacao.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fiscalizacao-lista',
  standalone: true,
  imports: [AngularMaterialModule, MatSortModule, CommonModule],
  templateUrl: './fiscalizacao-lista.component.html',
  styleUrl: './fiscalizacao-lista.component.scss',
})
export class FiscalizacaoListaComponent implements OnDestroy {
  #fiscalizacaoService = inject(FiscalizacaoService);
  #route = inject(Router);
  dialog = inject(MatDialog);
  isLoading = true;

  fiscalizacoes: IFiscalizacoes = [];

  displayedColumns: string[] = [
    'matriculaAgente',
    'nomeAgente',
    'dataEmissao',
    'dataConferencia',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.fiscalizacoes);
  contador = 0;

  fiscalizacao = signal<IFiscalizacao>({
    id: '',
    matriculaAgente: '',
    nomeAgente: '',
    dataEmissao: '',
    dataConferencia: '',
  });

  subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator)
  paginator: MatPaginator | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    this.#fiscalizacaoService
      .list()
      .pipe()
      .subscribe((fiscalizacoes: IFiscalizacoes) => {
        this.fiscalizacoes = fiscalizacoes;
        this.dataSource = new MatTableDataSource(this.fiscalizacoes);
        this.contador = fiscalizacoes.length;
        this.isLoading = false;
      });
  }

  add(fiscalizacao: IFiscalizacao) {
    this.#route.navigate(['fiscalizacaoForm']);
  }
  edit(id: string) {
    this.#route.navigate(['fiscalizacaoForm'], {
      queryParams: { id: id },
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#fiscalizacaoService
            .deleteFiscalizacao(id)
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
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
