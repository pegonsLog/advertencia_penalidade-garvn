import { Component } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route: Router) {

  }
escala(arg0: string) {
throw new Error('Method not implemented.');
}
facultativo(arg0: string) {
throw new Error('Method not implemented.');
}
entrar(arg0: string) {
this.route.navigate(["user"])
}
tre(arg0: string) {
throw new Error('Method not implemented.');
}

}
