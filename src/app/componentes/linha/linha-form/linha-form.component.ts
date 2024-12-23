import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILinha } from '../../../interface/linha';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { LinhaService } from '../linha.service';

@Component({
  selector: 'app-linha-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './linha-form.component.html',
  styleUrl: './linha-form.component.scss',
})
export class LinhaFormComponent {
  #fb = inject(FormBuilder);
  #linhaService = inject(LinhaService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  linhaForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  public iLinha = signal<ILinha>({
    id: '',
    numeroLinha: '',
    nomeLinha: '',
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#linhaService
        .umaLinha(id)
        .subscribe((result: ILinha) => {
          this.linhaForm = this.#fb.group({
            id: [result.id],
            numeroLinha: [result.numeroLinha, Validators.required],
            nomeLinha: [result.nomeLinha, Validators.required],
          });
        });
    }

    this.linhaForm = this.#fb.group({
      numeroLinha: ['', Validators.required],
      nomeLinha: ['', Validators.required],
    });
  }

  onNew() {
    this.#linhaService
      .addLinha(this.linhaForm.getRawValue())
      .then(() => {
        this.#route.navigate(['linhaLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#linhaService
      .updateLinha(this.linhaForm.getRawValue())
      .then(() => {
        this.#route.navigate(['linhaLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar linha:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['linhaLista']);
  }

  ngOnInit(): void {}

  linhaFormEdit(result: ILinha) {
    this.linhaForm = this.#fb.group({
      numeroLinha: [result.numeroLinha, Validators.required],
      nomeLinha: [result.nomeLinha, Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
