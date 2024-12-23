import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUsuario, IUsuarios } from '../interface/usuario';
import { AngularMaterialModule } from '../shared/angular-material/angular-material';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private route = inject(Router);
  private userService = inject(UserService);

  matricula = signal<string>('');
  senha = signal<string>('');

  private subscription = new Subscription();

  private users = signal<IUsuarios>([]);

  public user = signal<IUsuario>({
    id: '',
    matricula: '',
    nome: '',
    senha: '',
    perfil: '',
  });

  constructor() {
    this.subscription = this.userService
      .list()
      .subscribe((result: IUsuarios) => this.users.set(result));
  }

  entrar(matricula: string, senha: string) {
    for (let r of this.users()) {
      if (r.matricula === matricula && r.senha === senha) {
        this.user.set(r);
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('role', r.perfil);
        this.route.navigate(['home']);
      }
    }
    if (matricula === '' || senha === '') {
       alert('Preencha os 2 campos para validação do usuário!');
       return
    }
    if (this.user().matricula !== matricula || this.user().senha !== senha) {
      alert('Usuário e/ou senha inválido(s)!');
      this.senha.set('');
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
