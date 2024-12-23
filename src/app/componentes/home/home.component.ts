import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private route = inject(Router);
  role: string | null;

  constructor() {
    this.role = sessionStorage.getItem('role');
  }
  sair() {
    sessionStorage.removeItem('isAuthenticated');
    this.route.navigate(['login']);
  }
  agente() {
    this.route.navigate(['agenteLista']);
  }
  usuario() {
    if(this.role === 'adm'){
    this.route.navigate(['userLista']);
    }else{
      alert('O gerenciamento de usuários só pode ser acessado por administradores!')
    }
  }
  infracao() {
    this.route.navigate(['infracaoLista']);
  }
  irregularidades() {
    this.route.navigate(['irregularidadeLista']);
  }
  adicionarIrregularidade() {
    this.route.navigate(['irregularidadeAdicionar']);
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
  parametrosConsulta() {
    this.route.navigate(['parametros']);
  }
}
