import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUsuario, IUsuarios } from '../../interface/usuario';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  #fb = inject(FormBuilder);
  #userService = inject(UserService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute)

  userForm: FormGroup;

  id = signal<string>('');

  public user = signal<IUsuario>({
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  });

  constructor() {
    this.userForm = this.#fb.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      perfil: ['', Validators.required],
    });

    console.log(this.id.set(this.#activatedRoute.snapshot.queryParams['edit']));

  }

  onNew() {
    this.#userService
      .addUser(this.userForm.getRawValue())
      .then(() => {
        console.log('Usuário adicionado com sucesso!');
        this.#route.navigate(['userLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar usuário:', error);
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#userService
      .updateUser(this.userForm.getRawValue())
      .then(() => {
        console.log('Usuário alterado com sucesso!');
        this.#route.navigate(['userLista']);
      })
      .catch((error) => {
        console.error('Erro ao adicionar usuário:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    let teste = this.user();
    this.#userService
      .list()
      .pipe()
      .subscribe((dados: IUsuarios) => console.log(dados));
    this.#userService
      .oneUser('564')
      .pipe()
      .subscribe((user: IUsuario) => (teste = user));
  }
}
