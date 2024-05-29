import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVeiculo, IVeiculos } from '../../../interface/veiculo';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { VeiculoService } from '../veiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veiculo-lista',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './veiculo-lista.component.html',
  styleUrl: './veiculo-lista.component.scss',
})
export class VeiculoListaComponent implements OnDestroy {
  #veiculoService = inject(VeiculoService);
  #route = inject(Router);
  dialog = inject(MatDialog);

  veiculos: IVeiculos = [];

  veiculo = signal<IVeiculo>({
    id: '',
    numeroVeiculo: '',
    placa: '',
    tipo: '',
    operadora: ''
  });

  displayedColumns: string[] = ['numeroVeiculo', 'placaVeiculo', 'actions'];
  dataSource = new MatTableDataSource(this.veiculos);

  subscription: Subscription = new Subscription();

  constructor() {
    this.#veiculoService
      .list()
      .pipe()
      .subscribe((veiculos: IVeiculos) => {
        this.veiculos = veiculos;
        this.dataSource = new MatTableDataSource(this.veiculos)});
  }

  add(veiculo: IVeiculo) {
    this.#route.navigate(['veiculoForm']);
  }
  edit(id: string) {
    this.#route.navigate(['veiculoForm'], {
      queryParams: { id: id },
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#veiculoService
            .deleteVeiculo(id)
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
