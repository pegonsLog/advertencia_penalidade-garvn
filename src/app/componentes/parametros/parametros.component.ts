import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Subscription } from 'rxjs';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';

@Component({
  selector: 'app-parametros',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
  ],
  providers: [provideNgxMask()],
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

  consultarPorPeriodo(dataInicio: string, dataFim: string) {
    this.#route.navigate(['irregularidadeLista'], {
      queryParams: { dataInicio:  this.converterStringEmDate(dataInicio), dataFim: this.converterStringEmDate(dataFim), ehPorPeriodo: true},
    });
  }

  consultarPorNumero(numeroNotificacao: string) {
    this.#route.navigate(['irregularidadeLista'], {
      queryParams: { numeroNotificacao:  numeroNotificacao, ehPorNumero: true},
    });
  }

  voltar() {
    this.#route.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  converterStringEmDate(data: string){
    let customDateString = data;
    let parts = customDateString.split('/');

    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let year = parseInt(parts[2], 10);
    let date = new Date(year, month, day);
    return date;
  }
}
