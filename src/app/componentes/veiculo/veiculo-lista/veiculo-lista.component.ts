import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material';

@Component({
  selector: 'app-veiculo-lista',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './veiculo-lista.component.html',
  styleUrl: './veiculo-lista.component.scss'
})
export class VeiculoListaComponent {

}
