import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAgente, IAgentes } from '../../../interface/agente';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../../shared/dialogs/confirmation/confirmation.component';
import { AgenteService } from '../agente.service';

@Component({
  selector: 'app-agente-lista',
  standalone: true,
  imports: [AngularMaterialModule, MatSortModule, CommonModule],
  templateUrl: './agente-lista.component.html',
  styleUrl: './agente-lista.component.scss',
})
export class AgenteListaComponent {
  #agenteService = inject(AgenteService);
  #route = inject(Router);
  dialog = inject(MatDialog);
  isLoading = true;

  agentes: IAgentes = [];

  displayedColumns: string[] = [
    'matriculaAgenteFiscalizador',
    'nomeAgenteFiscalizador',
    'cargo',
    'lotacao',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.agentes);
  contador = 0;

  agente = signal<IAgente>({
    id: '',
    matriculaAgenteFiscalizador: '',
    nomeAgenteFiscalizador: '',
    cargo: '',
    lotacao: '',
  });

  subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator)
  paginator: MatPaginator | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    // this.agentes = this.#agenteService.loadAgentes();
    this.#agenteService
      .list()
      .pipe()
      .subscribe((agentes: IAgentes) => {
        this.agentes = agentes;
        this.dataSource = new MatTableDataSource(this.agentes);
        this.contador = agentes.length;
        this.isLoading = false
      });
  }

  add(agente: IAgente) {
    this.#route.navigate(['agenteForm']);
  }
  edit(id: string) {
    this.#route.navigate(['agenteForm'], {
      queryParams: { id: id },
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#agenteService
            .deleteAgente(id)
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
    this.contador = this.dataSource._filterData(this.agentes).length;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // exportar() {
  //   for (let agente of agentesExportar) {
  //     this.#agenteService.addAgente(agente).then(() => console.log(agente.matriculaAgenteFiscalizador));
  //   }
  // }
}
