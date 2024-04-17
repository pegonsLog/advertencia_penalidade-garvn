import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUsuario, IUsuarios } from '../../interface/usuario';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserComponent {

  user: IUsuario = {
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  };

  users: IUsuarios = [];

  constructor(private userService: UserService) {
    this.userService.list().then((data) => (this.users = data));
  }

  oneUser(matricula: string) {
    this.userService.oneUser(matricula).then((data) => {
      if (data.matricula === matricula) {
        this.user = data;
      } else {
        alert('Usuário não encontrado!');
      }
    });
  }

  updateUser(id: string) {
    this.userService.updateUser(id).then((data) => {

    });
  }
}
