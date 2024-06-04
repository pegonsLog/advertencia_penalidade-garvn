import { Component, inject, signal } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { IIrregularidade } from '../../../interface/irregularidade';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IrregularidadeService } from '../irregularidade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-irregularidade-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './irregularidade-form.component.html',
  styleUrl: './irregularidade-form.component.scss'
})

export class IrregularidadeFormComponent {

  #fb = inject(FormBuilder);
  #irregularidadeService = inject(IrregularidadeService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  irregularidadeForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  public irregularidade = signal<IIrregularidade>({
    id: '',
    dataIrregularidade: '',
    horario: '',
    local: '',
    numeroLocal: '',
    bairro: '',
    descricao: '',
    numeroInfracao: '',
    numeroConsorcio: '',
    numeroLinha: '',
    numeroVeiculo: ''
  });

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#irregularidadeService
        .umaIrregularidade(id)
        .subscribe((result: IIrregularidade) => {
          this.irregularidadeForm = this.#fb.group({
            id: [result.id],

          });
        });
    }

    this.irregularidadeForm = this.#fb.group({
      dataIrregularidade: ['', Validators.required],
      horario: ['', Validators.required],
      local: ['', Validators.required],
      numeroLocal: ['', Validators.required],
      bairro: ['', Validators.required],
      descricao: ['', Validators.required],
      numeroInfracao: ['', Validators.required],
      numeroConsorcio: ['', Validators.required],
      numeroVeiculo: ['', Validators.required],
    });
  }

  onNew() {
    this.#irregularidadeService
      .addIrregularidade(this.irregularidadeForm.getRawValue())
      .then(() => {
        console.log('Irregularidade adicionada com sucesso!');
        this.#route.navigate(['irregularidadeLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }
  onUpdate() {
    this.#irregularidadeService
      .updateIrregularidade(this.irregularidadeForm.getRawValue())
      .then(() => {
        this.#route.navigate(['irregularidadeLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar irregularidade:', error);
        alert('Erro ao alterar o registro');
      });
  }
  voltar() {
    this.#route.navigate(['irregularidadeLista']);
  }

  ngOnInit(): void {}

  irregularidadeIIrregularidadeFormEdit(irregularidadeIIrregularidade: IIrregularidade) {
    this.irregularidadeForm = this.#fb.group({
      dataIrregularidade: ['', Validators.required],
      horario: ['', Validators.required],
      local: ['', Validators.required],
      numeroLocal: ['', Validators.required],
      bairro: ['', Validators.required],
      descricao: ['', Validators.required],
      numeroInfracao: ['', Validators.required],
      numeroConsorcio: ['', Validators.required],
      numeroVeiculo: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
