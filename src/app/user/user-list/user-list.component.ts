import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  isLoading = true;
  role: string | null  = '';

  users: IUsuarios = [];

  user = signal({
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  });

  displayedColumns: string[] = ['name', 'password', 'role', 'actions'];
  dataSource = new MatTableDataSource(this.users);
  contador = 0;

  @ViewChild(MatPaginator)
  paginator: MatPaginator | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  subscription: Subscription = new Subscription();

  constructor() {
    this.role = sessionStorage.getItem('role');

    this.#userService
      .list()
      .pipe()
      .subscribe((users: IUsuarios) => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.contador = users.length;
        this.isLoading = false;
      });
  }

  oneUser(matricula: string) {}

  add(usuario: IUsuario) {
    this.#route.navigate(['userForm']);
  }

  edit(id: string) {
    this.#route.navigate(['userForm'], {
      queryParams: { id: id },
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
              alert('Registro excluído com sucesso!');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  voltar() {
    this.#route.navigate(['home']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.contador = this.dataSource._filterData(this.users).length;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
