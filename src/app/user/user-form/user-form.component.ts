import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { IUsuario, IUsuarios } from '../../interface/usuario';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material';
import { UserService } from '../user.service';

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


  userParam: IUsuario = {
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  };

  public userForm = this.#fb.group({
    matricula: ['', Validators.required],
    nome: ['', Validators.required],
    senha: ['', Validators.required],
    perfil: ['', Validators.required],
  });

  onNew() {
    throw new Error('Method not implemented.');
  }
  onUpdate() {
    throw new Error('Method not implemented.');
  }
  voltar() {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    let teste = this.userParam;
    this.#userService.list().pipe().subscribe((dados: IUsuarios) => console.log(dados));
    this.#userService.oneUser('564').pipe().subscribe((user: IUsuario) => teste = user)
    }
}

