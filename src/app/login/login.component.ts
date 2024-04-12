import { Component } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
