import { Routes } from '@angular/router';
import { ConsorcioFormComponent } from './componentes/consorcio/consorcio-form/consorcio-form.component';
import { ConsorcioListaComponent } from './componentes/consorcio/consorcio-lista/consorcio-lista.component';
import { FiscalizacaoFormComponent } from './componentes/fiscalizacao/fiscalizacao-form/fiscalizacao-form.component';
import { FiscalizacaoListaComponent } from './componentes/fiscalizacao/fiscalizacao-lista/fiscalizacao-lista.component';
import { InfracaoFormComponent } from './componentes/infracao/infracao-form/infracao-form.component';
import { InfracaoListaComponent } from './componentes/infracao/infracao-lista/infracao-lista.component';
import { IrregularidadeFormComponent } from './componentes/irregularidade/irregularidade-form/irregularidade-form.component';
import { IrregularidadeListaComponent } from './componentes/irregularidade/irregularidade-lista/irregularidade-lista.component';
import { LinhaFormComponent } from './componentes/linha/linha-form/linha-form.component';
import { LinhaListaComponent } from './componentes/linha/linha-lista/linha-lista.component';
import { VeiculoFormComponent } from './componentes/veiculo/veiculo-form/veiculo-form.component';
import { VeiculoListaComponent } from './componentes/veiculo/veiculo-lista/veiculo-lista.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'consorcioLista',
    component: ConsorcioListaComponent,
  },
  {
    path: 'consorcioForm',
    component: ConsorcioFormComponent,
  },
  {
    path: 'fiscalizacaoLista',
    component: FiscalizacaoListaComponent,
  },
  {
    path: 'fiscalizacaoForm',
    component: FiscalizacaoFormComponent,
  },
  {
    path: 'infracaoForm',
    component: InfracaoFormComponent,
  },
  {
    path: 'infracaoLista',
    component: InfracaoListaComponent,
  },
  {
    path: 'irregularidadeForm',
    component: IrregularidadeFormComponent,
  },
  {
    path: 'irregularidadeLista',
    component: IrregularidadeListaComponent,
  },
  {
    path: 'linhaForm',
    component: LinhaFormComponent,
  },
  {
    path: 'linhaLista',
    component: LinhaListaComponent,
  },
  {
    path: 'veiculoForm',
    component: VeiculoFormComponent,
  },
  {
    path: 'veiculoLista',
    component: VeiculoListaComponent,
  },
];
