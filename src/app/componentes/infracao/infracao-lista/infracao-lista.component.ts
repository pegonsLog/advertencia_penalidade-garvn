import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IInfracao, IInfracoes } from '../../../interface/infracao';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { InfracaoService } from '../infracao.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-infracao-lista',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './infracao-lista.component.html',
  styleUrl: './infracao-lista.component.scss'
})
export class InfracaoListaComponent implements OnDestroy{

  #infracaoService = inject(InfracaoService);
  #route = inject(Router);
  dialog = inject(MatDialog);

  infracoes: IInfracoes = [];

  displayedColumns: string[] = ['codigoInfracao', 'nomeInfracao', 'actions'];
  dataSource = new MatTableDataSource(this.infracoes);

  infracao = signal<IInfracao>({
    id: '',
    codigoInfracao: '',
    nomeInfracao: '',
  });


  subscription: Subscription = new Subscription();

  constructor() {
    this.#infracaoService.list()
      .pipe()
      .subscribe((infracoes: IInfracoes) => {{
        this.infracoes = infracoes;
        this.dataSource = new MatTableDataSource(this.infracoes)}});
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
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

