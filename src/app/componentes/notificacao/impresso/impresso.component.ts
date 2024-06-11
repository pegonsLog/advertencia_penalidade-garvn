import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';

@Component({
  selector: 'app-impresso',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './impresso.component.html',
  styleUrl: './impresso.component.scss'
})
export class ImpressoComponent {
  #route = inject(Router);

  voltar() {
    this.#route.navigate(['home']);
  }

}
