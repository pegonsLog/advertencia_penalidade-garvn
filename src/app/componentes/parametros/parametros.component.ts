import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Subscription } from 'rxjs';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { MatAccordion } from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';

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
  providers: [provideNgxMask(), provideNativeDateAdapter()],

  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParametrosComponent {
  #route = inject(Router);
  accordion = viewChild.required(MatAccordion);

  dataInicio: string = '01/01/2020';
  dataFim: string = '31/12/2026';
  numeroNotificacao: string = '';

  alertaPreenchimentoPeriodo = false;

  private subscription = new Subscription();

  constructor() {}

  consultarPorPeriodo(dataInicio: string, dataFim: string) {
    const dtInicio = new Date(dataInicio);
    const dtFim = new Date(dataFim);

    if (this.dataInicio != '' && this.dataFim != '') {
      this.#route.navigate(['irregularidadeLista'], {
        queryParams: {
          dataInicio: dtInicio,
          dataFim: dtFim,
          ehPorPeriodo: true,
        },
      });
    } else {
      alert('Informe o período, preenchendo os dois campos!');
    }
  }

  consultarPorNumero(numeroNotificacao: string) {
    if (this.numeroNotificacao) {
      this.#route.navigate(['irregularidadeLista'], {
        queryParams: {
          numeroNotificacao: numeroNotificacao,
          ehPorNumero: true,
        },
      });
    } else {
      alert('Informe o número da notificação!');
    }
  }

  voltar() {
    this.#route.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  converterStringEmDate(data: string) {
    let customDateString = data;
    let parts = customDateString.split('/');

    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let year = parseInt(parts[2], 10);
    let date = new Date(year, month, day);
    return date;
  }
}
