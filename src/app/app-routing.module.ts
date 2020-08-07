import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadClienteListaComponent } from './componentes/cadastro-cliente/cad-cliente-lista/cad-cliente-lista.component';
import { CadClienteDetalheComponent } from './componentes/cadastro-cliente/cad-cliente-detalhe/cad-cliente-detalhe.component';
import { CadClienteNovoComponent } from './componentes/cadastro-cliente/cad-cliente-novo/cad-cliente-novo.component';
import { CadClienteEditarComponent } from './componentes/cadastro-cliente/cad-cliente-editar/cad-cliente-editar.component';
import { CadFuncionarioListaComponent } from './componentes/cadastro-funcionario/cad-funcionario-lista/cad-funcionario-lista.component';
import { CadFuncionarioDetalheComponent } from './componentes/cadastro-funcionario/cad-funcionario-detalhe/cad-funcionario-detalhe.component';
import { CadFuncionarioNovoComponent } from './componentes/cadastro-funcionario/cad-funcionario-novo/cad-funcionario-novo.component';
import { CadFuncionarioEditarComponent } from './componentes/cadastro-funcionario/cad-funcionario-editar/cad-funcionario-editar.component';


const routes: Routes = [
  {
    path: "cadastro-cliente/lista",
    component: CadClienteListaComponent
  },
  {
    path: "cadastro-cliente/detalhe",
    component: CadClienteDetalheComponent
  },
  {
    path: "cadastro-cliente/novo",
    component: CadClienteNovoComponent
  },
  {
    path: "cadastro-cliente/editar/:id",
    component: CadClienteEditarComponent
  },
  {
    path: "cadastro-funcionario/lista",
    component: CadFuncionarioListaComponent
  },
  {
    path: "cadastro-funcionario/detalhe",
    component: CadFuncionarioDetalheComponent
  },
  {
    path: "cadastro-funcionario/novo",
    component: CadFuncionarioNovoComponent
  },
  {
    path: "cadastro-funcionario/editar",
    component: CadFuncionarioEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
