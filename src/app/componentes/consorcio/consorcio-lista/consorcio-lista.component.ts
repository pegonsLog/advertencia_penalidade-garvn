import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IConsorcio, IConsorcios } from '../../../interface/consorcio';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { ConsorcioService } from '../consorcio.service';

@Component({
  selector: 'app-consorcio-lista',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './consorcio-lista.component.html',
  styleUrl: './consorcio-lista.component.scss',
})
export class ConsorcioListaComponent implements OnDestroy {

  #consorcioService = inject(ConsorcioService);
  #route = inject(Router);
  dialog = inject(MatDialog);

  consorcios: IConsorcios = [];

  consorcio = signal<IConsorcio>({
    id: '',
  numeroConsorcio: '',
  nomeConsorcio: '',
});

    displayedColumns: string[] = ['numeroConsorcio', 'nomeConsorcio', 'actions'];
    dataSource = new MatTableDataSource(this.consorcios);

  subscription: Subscription = new Subscription();

  constructor() {
    this.#consorcioService
    .list()
      .pipe()
      .subscribe((consorcios: IConsorcios) => {
        this.consorcios = consorcios;
        this.dataSource = new MatTableDataSource(this.consorcios)});
    }

    add(consorcio: IConsorcio) {
    this.#route.navigate(['consorcioForm']);
  }
  edit(id: string) {
    this.#route.navigate(['consorcioForm'], {
      queryParams: { id: id },
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#consorcioService
            .deleteConsorcio(id)
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
