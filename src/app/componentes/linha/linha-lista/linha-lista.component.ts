import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILinha, ILinhas } from '../../../interface/linha';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { LinhaService } from '../linha.service';

@Component({
  selector: 'app-linha-lista',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './linha-lista.component.html',
  styleUrl: './linha-lista.component.scss'
})
export class LinhaListaComponent implements OnDestroy{
  #linhaService = inject(LinhaService);
  #route = inject(Router);
  dialog = inject(MatDialog);

  linhas = signal<ILinhas>([]);

  linha = signal<ILinha>({
    id: '',
    numeroLinha: '',
    nomeLinha: '',
  });

  displayedColumns: string[] = ['numeroLinha', 'nomeLinha', 'actions'];

  subscription: Subscription = new Subscription();

  constructor() {
    this.#linhaService
      .list()
      .pipe()
      .subscribe((linhas: ILinhas) => this.linhas.set(linhas));
  }


  add(linha: ILinha) {
    this.#route.navigate(['linhaForm']);
  }
  edit(id: string) {
    this.#route.navigate(['linhaForm'], {
      queryParams: { id: id },
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#linhaService
            .deleteLinha(id)
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

