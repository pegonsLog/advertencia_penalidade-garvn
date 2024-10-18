import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVeiculo, IVeiculos } from '../../../interface/veiculo';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { VeiculoService } from '../veiculo.service';
import { veiculosExportar } from '../../../veiculos';

@Component({
  selector: 'app-veiculo-lista',
  standalone: true,
  imports: [AngularMaterialModule, MatSortModule, CommonModule],
  templateUrl: './veiculo-lista.component.html',
  styleUrl: './veiculo-lista.component.scss',
})
export class VeiculoListaComponent implements OnDestroy {
  #veiculoService = inject(VeiculoService);
  #route = inject(Router);
  dialog = inject(MatDialog);
  isLoading = true;

  veiculos: IVeiculos = [];

  displayedColumns: string[] = [
    'numeroVeiculo',
    'placa',
    'operadora',
    'consorcio',
    'actions',
  ];

  dataSource = new MatTableDataSource(this.veiculos);
  contador = 0;

  subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator)
  paginator: MatPaginator | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  veiculo = signal<IVeiculo>({
    id: '',
    numeroVeiculo: '',
    placa: '',
    operadora: '',
    consorcio: '',
  });

  constructor() {
      this.#veiculoService
        .list()
        .pipe()
        .subscribe((veiculos: IVeiculos) => {
          this.veiculos = veiculos;
          this.dataSource = new MatTableDataSource(this.veiculos);
          this.contador = veiculos.length;
          this.isLoading = false;
        });


  }

  add() {
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

    this.contador = this.dataSource._filterData(this.veiculos).length;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // exportar() {
  //   for (let veiculo of veiculosExportar) {
  //     this.#veiculoService
  //       .addVeiculo(veiculo)
  //       .then(() => console.log(veiculo.numeroVeiculo));
  //   }
  // }
}
