import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { IInfracao, IInfracoes } from '../../../interface/infracao';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { InfracaoService } from '../infracao.service';
import { infracaoExportar } from '../../../infracoes';

@Component({
  selector: 'app-infracao-lista',
  standalone: true,
  imports: [AngularMaterialModule, MatSortModule, CommonModule],
  templateUrl: './infracao-lista.component.html',
  styleUrl: './infracao-lista.component.scss',
})
export class InfracaoListaComponent implements OnDestroy {
  #infracaoService = inject(InfracaoService);
  #route = inject(Router);
  dialog = inject(MatDialog);
  isLoading = true;



  infracoes: IInfracoes = [];

  displayedColumns: string[] = ['codigoInfracao', 'nomeInfracao', 'actions'];
  dataSource = new MatTableDataSource(this.infracoes);
  dataSourceTeste = of(this.dataSource);
  contador = 0;

  @ViewChild(MatPaginator)
  paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  infracao = signal<IInfracao>({
    id: '',
    codigoInfracao: '',
    nomeInfracao: '',
  });

  subscription: Subscription = new Subscription();

  constructor() {

    this.#infracaoService
      .list()
      .pipe()
      .subscribe((infracoes: IInfracoes) => {
        this.infracoes = infracoes;
        this.dataSource = new MatTableDataSource(this.infracoes);
        this.contador = infracoes.length;
        this.isLoading = false;
      });
  }

  add(infracao: IInfracao) {
    this.#route.navigate(['infracaoForm']);
  }
  edit(id: string) {
    this.#route.navigate(['infracaoForm'], {
      queryParams: { id: id },
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#infracaoService
            .deleteInfracao(id)
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

    this.contador = this.dataSource._filterData(this.infracoes).length;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // exportar() {
  //   for (let infracao of infracaoExportar) {
  //     this.#infracaoService
  //       .addInfracao(infracao)
  //       .then(() => console.log(infracao.codigoInfracao));
  //   }
  // }
}
