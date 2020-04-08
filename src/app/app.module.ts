import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CadClienteDetalheComponent } from './componentes/cadastro-cliente/cad-cliente-detalhe/cad-cliente-detalhe.component';
import { CadClienteEditarComponent } from './componentes/cadastro-cliente/cad-cliente-editar/cad-cliente-editar.component';
import { CadClienteListaComponent } from './componentes/cadastro-cliente/cad-cliente-lista/cad-cliente-lista.component';
import { CadClienteNovoComponent } from './componentes/cadastro-cliente/cad-cliente-novo/cad-cliente-novo.component';
import { CadFuncionarioListaComponent } from './componentes/cadastro-funcionario/cad-funcionario-lista/cad-funcionario-lista.component';
import { CadFuncionarioDetalheComponent } from './componentes/cadastro-funcionario/cad-funcionario-detalhe/cad-funcionario-detalhe.component';
import { CadFuncionarioEditarComponent } from './componentes/cadastro-funcionario/cad-funcionario-editar/cad-funcionario-editar.component';
import { CadFuncionarioNovoComponent } from './componentes/cadastro-funcionario/cad-funcionario-novo/cad-funcionario-novo.component';
import { CadClienteService } from './services/cad-cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    CadClienteDetalheComponent,
    CadClienteEditarComponent,
    CadClienteListaComponent,
    CadClienteNovoComponent,
    CadFuncionarioListaComponent,
    CadFuncionarioDetalheComponent,
    CadFuncionarioEditarComponent,
    CadFuncionarioNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ CadClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
