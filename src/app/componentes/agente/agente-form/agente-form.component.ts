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
import { IAgente } from '../../../interface/agente';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material';
import { AgenteService } from '../agente.service';

@Component({
  selector: 'app-agente-form',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './agente-form.component.html',
  styleUrl: './agente-form.component.scss',
})
export class AgenteFormComponent {
  #fb = inject(FormBuilder);
  #agenteService = inject(AgenteService);
  #route = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  agenteForm: FormGroup;
  typeForm = signal<string>('');

  id = signal<string>('');

  private subscription = new Subscription();

  constructor() {
    const id = this.#activatedRoute.snapshot.queryParams['id'];

    if (id) {
      this.typeForm.set('edit');
      this.subscription = this.#agenteService
        .umaAgente(id)
        .subscribe((result: IAgente) => {
          this.agenteForm = this.#fb.group({
            id: [result.id],
            matriculaAgenteFiscalizador: [
              result.matriculaAgenteFiscalizador,
              Validators.required,
            ],
            nomeAgenteFiscalizador: [
              result.nomeAgenteFiscalizador,
              Validators.required,
            ],
            cargo: [result.cargo, Validators.required],
            lotacao: [result.lotacao, Validators.required],
          });
        });
    }

    this.agenteForm = this.#fb.group({
      matriculaAgenteFiscalizador: ['', Validators.required],
      nomeAgenteFiscalizador: ['', Validators.required],
      cargo: ['', Validators.required],
      lotacao: ['', Validators.required],
    });
  }

  onNew() {
    this.#agenteService
      .addAgente(this.agenteForm.getRawValue())
      .then(() => {
        this.#route.navigate(['agenteLista']);
        alert('Registro adicionado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao adicionar o registro');
      });
  }

  onUpdate() {
    this.#agenteService
      .updateAgente(this.agenteForm.getRawValue())
      .then(() => {
        this.#route.navigate(['agenteLista']);
        alert('Registro atualizado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar agente:', error);
        alert('Erro ao alterar o registro');
      });
  }

  voltar() {
    this.#route.navigate(['agenteLista']);
  }

  ngOnInit(): void {}

  agenteFormEdit(result: IAgente) {
    this.agenteForm = this.#fb.group({
      matriculaAgenteFiscalizador: [
        result.matriculaAgenteFiscalizador,
        Validators.required,
      ],
      nomeAgenteFiscalizador: [
        result.nomeAgenteFiscalizador,
        Validators.required,
      ],
      cargo: [result.cargo, Validators.required],
      lotacao: [result.lotacao, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
