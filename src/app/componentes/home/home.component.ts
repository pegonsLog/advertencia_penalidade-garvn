import { Component, inject } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private route = inject(Router)
sair() {
this.route.navigate(['login'])
}
usuario() {
this.route.navigate(['userLista'])
}
infracao() {
this.route.navigate(['infracaoLista'])
}
irregularidades() {
this.route.navigate(['irregularidadeLista'])
}
consorcio() {
this.route.navigate(['consorcioLista'])
}
veiculo() {
this.route.navigate(['veiculoLista'])
}
linha() {
this.route.navigate(['linhaLista'])
}
fiscalizacao() {
this.route.navigate(['fiscalizacaoLista'])
}

}
