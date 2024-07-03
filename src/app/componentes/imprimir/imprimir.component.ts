import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { IrregularidadeService } from '../irregularidade/irregularidade.service';


@Component({
  selector: 'app-imprimir',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './imprimir.component.html',
  styleUrl: './imprimir.component.scss'
})
export class ImprimirComponent {
  #route = inject(Router);
  #irreguaridadeService = inject(IrregularidadeService);


  constructor(){


  }

  voltar() {
    this.#route.navigate(['home']);
  }

}
