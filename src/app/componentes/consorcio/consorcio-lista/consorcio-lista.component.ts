import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
export class ConsorcioListaComponent {
  #consorcioService = inject(ConsorcioService);
  #route = inject(Router);
  dialog = inject(MatDialog);

  consorcios = signal<IConsorcio[]>([]);

  consorcio = signal<IConsorcio>({
    id: '',
    numeroConsorcio: '',
    nomeConsorcio: '',
  });

  displayedColumns: string[] = ['numeroConsorcio', 'nomeConsorcio', 'actions'];

  subscription: Subscription = new Subscription();

  constructor() {
    this.#consorcioService
      .list()
      .pipe()
      .subscribe((consorcios: IConsorcios) => this.consorcios.set(consorcios));
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
