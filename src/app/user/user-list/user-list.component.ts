import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
export class UserListComponent implements OnDestroy {
  user: IUsuario = {
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  };

  displayedColumns: string[] = ['name', 'password', 'role', 'actions'];

  users: IUsuarios = [];

  subscription: Subscription = new Subscription();

  constructor(private userService: UserService, private route: Router) {
    this.userService
      .list()
      .pipe()
      .subscribe((users: IUsuarios) => (this.users = users));
  }
  
  oneUser(matricula: string) {}
  
  add(usuario: IUsuario) {
    this.route.navigate(['userForm']);
  }  
  edit(user: IUsuario, id: string) {
    throw new Error('Method not implemented.');
  }
  delete(arg0: any) {
    throw new Error('Method not implemented.');
  }
  voltar() {
    this.route.navigate(['login']);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }
}
