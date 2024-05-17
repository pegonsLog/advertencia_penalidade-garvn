import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUsuario, IUsuarios } from '../../interface/usuario';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { ConfirmationDialogComponent } from '../../shared/dialogs/confirmation/confirmation.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnDestroy {

  #userService = inject(UserService);
  #route = inject(Router);
  dialog = inject(MatDialog);

  users = signal<IUsuarios>([]);

  user = signal({
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  });

  displayedColumns: string[] = ['name', 'password', 'role', 'actions'];


  subscription: Subscription = new Subscription();

  constructor() {
    this.#userService
      .list()
      .pipe()
      .subscribe((users: IUsuarios) => (this.users.set(users)));
  }

  oneUser(matricula: string) {}

  add(usuario: IUsuario) {
    this.#route.navigate(['userForm']);
  }
  edit(id: string) {
    this.#route.navigate(['edit'], {
      queryParams: { id: id},
    });
  }
  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.#userService
            .deleteUser(id)
            .then(() => {
              alert('Registro excluído!')
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });

  }
  voltar() {
    this.#route.navigate(['login']);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }
}
