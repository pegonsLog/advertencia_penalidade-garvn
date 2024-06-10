import { Component, inject } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { Router } from '@angular/router';
import { ExportarVeiculos } from '../../veiculosParaFirestore';
import { VeiculoService } from '../veiculo/veiculo.service';
import { IVeiculos } from '../../interface/veiculo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private route = inject(Router);
  private veiculoService = inject(VeiculoService);
  exportarVeiculos = inject(ExportarVeiculos);
 veiculos2: IVeiculos = (this.exportarVeiculos as unknown) as IVeiculos;


  constructor() {

  }
  sair() {
    this.route.navigate(['login']);
  }
  agente() {
    this.route.navigate(['agenteLista']);
  }
  usuario() {
    this.route.navigate(['userLista']);
  }
  infracao() {
    this.route.navigate(['infracaoLista']);
  }
  irregularidades() {
    this.route.navigate(['irregularidadeLista']);
  }
  consorcio() {
    this.route.navigate(['consorcioLista']);
  }
  veiculo() {
    this.route.navigate(['veiculoLista']);
  }
  linha() {
    this.route.navigate(['linhaLista']);
  }
  fiscalizacao() {
    this.route.navigate(['fiscalizacaoLista']);
  }
  exportar() {

    // this.route.navigate(['exportar'])
  }
}
