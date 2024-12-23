import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUsuario } from '../../interface/usuario';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnDestroy {
  #fb = inject(FormBuilder);
  #userService = inject(UserService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  userForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  public user = signal<IUsuario>({
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#userService
        .oneUser(id)
        .subscribe((result: IUsuario) => {
          this.userForm = this.#fb.group({
            id: [result.id],
            matricula: [result.matricula, Validators.required],
            nome: [result.nome, Validators.required],
            senha: [result.senha, Validators.required],
            perfil: [result.perfil, Validators.required],
          });
        });
    }
    this.userForm = this.#fb.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      perfil: ['', Validators.required],
    });
  }

  onNew() {
    this.#userService
      .addUser(this.userForm.getRawValue())
      .then(() => {
        this.#route.navigate(['userLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#userService
      .updateUser(this.userForm.getRawValue())
      .then(() => {
        this.#route.navigate(['userLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar usuário:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['userLista']);
  }

  ngOnInit(): void {}

  userFormEdit(user: IUsuario) {
    this.userForm = this.#fb.group({
      matricula: [user.matricula, Validators.required],
      nome: [user.nome, Validators.required],
      senha: [user.senha, Validators.required],
      perfil: [user.perfil, Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
