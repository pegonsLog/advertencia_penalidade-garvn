import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IConsorcio } from '../../../interface/consorcio';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { ConsorcioService } from '../consorcio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consorcio-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './consorcio-form.component.html',
  styleUrl: './consorcio-form.component.scss',
})
export class ConsorcioFormComponent {
  #fb = inject(FormBuilder);
  #consorcioService = inject(ConsorcioService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  consorcioForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  public consorcio = signal<IConsorcio>({
    id: '',
    numeroConsorcio: '',
    nomeConsorcio: '',
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#consorcioService
        .umConsorcio(id)
        .subscribe((result: IConsorcio) => {
          this.consorcioForm = this.#fb.group({
            id: [result.id],
            numeroConsorcio: [result.numeroConsorcio, Validators.required],
            nomeConsorcio: [result.nomeConsorcio, Validators.required],
          });
        });
    }

    this.consorcioForm = this.#fb.group({
      numeroConsorcio: ['', Validators.required],
      nomeConsorcio: ['', Validators.required],
    });
  }

  onNew() {
    console.log(this.consorcioForm.getRawValue());
    this.#consorcioService
      .addConsorcio(this.consorcioForm.getRawValue())
      .then((data: any) => {
        console.log(data);
        this.#route.navigate(['consorcioLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#consorcioService
      .updateConsorcio(this.consorcioForm.getRawValue())
      .then(() => {
        this.#route.navigate(['consorcioLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar usuário:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['consorcioLista']);
  }

  ngOnInit(): void {}

  consorcioFormEdit(consorcio: IConsorcio) {
    this.consorcioForm = this.#fb.group({
      numeroConsorcio: [consorcio.numeroConsorcio, Validators.required],
      nomeConsorcio: [consorcio.nomeConsorcio, Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
