import { Component, OnDestroy, inject, signal } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { FormsModule } from '@angular/forms';
import { IUsuario, IUsuarios } from '../interface/usuario';
import { Subscription, map } from 'rxjs';

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

  matricula = signal<string>('564');
  senha = signal<string>('123');

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
    console.log('teste')
    this.subscription = this.userService
      .list()
      .subscribe((result: IUsuarios) => this.users.set(result));
  }

  entrar(matricula: string, senha: string) {
    for (let r of this.users()) {
      if (r.matricula === matricula && r.senha === senha) {
        this.user.set(r);
        this.route.navigate(['home']);
      }
    }
    if (matricula === '' || senha === '') {
       alert('Preencha os 2 campos para validação do usuário!');
       return
    }
    if (this.user().matricula !== matricula || this.user().senha !== senha) {
      alert('Registro não encontrado!');
      this.matricula.set('');
      this.senha.set('');
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
