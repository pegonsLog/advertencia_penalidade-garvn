import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { IrregularidadeService } from '../irregularidade.service';

@Component({
  selector: 'app-impresso',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './impresso.component.html',
  styleUrl: './impresso.component.scss'
})
export class ImpressoComponent {
  #route = inject(Router);
  #irreguaridadeService = inject(IrregularidadeService);

  numeroNotificacao = '2545'

  constructor(){
   let numero = this.#irreguaridadeService.padWithZeros('12355')
    console.log(new Date().getFullYear() + "/" + numero)

  }

  voltar() {
    this.#route.navigate(['home']);
  }

}
