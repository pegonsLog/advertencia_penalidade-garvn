import { Component } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
