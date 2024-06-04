import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IInfracao } from '../../../interface/infracao';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { InfracaoService } from '../infracao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infracao-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './infracao-form.component.html',
  styleUrl: './infracao-form.component.scss',
})
export class InfracaoFormComponent {
  #fb = inject(FormBuilder);
  #infracaoService = inject(InfracaoService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  infracaoForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  public infracao = signal<IInfracao>({
    id: '',
    codigoInfracao: '',
    nomeInfracao: '',
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#infracaoService
        .umaInfracao(id)
        .subscribe((result: IInfracao) => {
          this.infracaoForm = this.#fb.group({
            id: [result.id],
            codigoInfracao: [result.codigoInfracao, Validators.required],
            nomeInfracao: [result.nomeInfracao, Validators.required],
          });
        });
    }

    this.infracaoForm = this.#fb.group({
      codigoInfracao: ['', Validators.required],
      nomeInfracao: ['', Validators.required],
    });
  }

  onNew() {
    this.#infracaoService
      .addInfracao(this.infracaoForm.getRawValue())
      .then(() => {
        console.log('Infração adicionado com sucesso!');
        this.#route.navigate(['infracaoLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#infracaoService
      .updateInfracao(this.infracaoForm.getRawValue())
      .then(() => {
        this.#route.navigate(['infracaoLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar infração:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['infracaoLista']);
  }

  ngOnInit(): void {}

  infracaoFormEdit(infracao: IInfracao) {
    this.infracaoForm = this.#fb.group({
      codigoInfracao: [infracao.codigoInfracao, Validators.required],
      nomeInfracao: [infracao.nomeInfracao, Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
