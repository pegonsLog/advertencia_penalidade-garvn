import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';

@Component({
  selector: 'app-parametros',
  standalone: true,
  imports: [AngularMaterialModule, FormsModule],
  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.scss',
})
export class ParametrosComponent {
  #route = inject(Router);

  dataInicio: any;
  dataFim: any;
  numeroNotificacao: any;

  private subscription = new Subscription();

  constructor() {}

  consultar() {
    throw new Error('Method not implemented.');
  }

  voltar() {
    this.#route.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
