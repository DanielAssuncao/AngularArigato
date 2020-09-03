import { map } from 'rxjs/operators';
import { CadClienteService } from './../../../services/cad-cliente.service';
import { CadEndereco } from './../../../models/cad-endereco';
import { NgForm } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { CadCliente } from 'src/app/models/cad-cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { CadCidade } from 'src/app/models/cad-cidade';

@Component({
  selector: 'app-cad-cliente-editar',
  templateUrl: './cad-cliente-editar.component.html',
  styleUrls: ['./cad-cliente-editar.component.css']
})
export class CadClienteEditarComponent implements OnInit {

  id: number;
  cadCliente = {} as CadCliente;
  cliente = {} as CadCliente
  cadEndereco = {} as CadEndereco;
  cadCidade = {} as CadCidade;
  listaCidades: Array<CadCidade>;
  response: String;

  constructor(private cadClienteService: CadClienteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Busca o id da url (rota) para utiliza-lo na busca de cadastro de clientes por id
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    
    this.buscarCadCliente(this.id);
    this.buscarCadCidades();
  }

  // Voltar para tela anterior
  goBack() {
    window.history.back();
  }

  // Buscar cliente por id
  buscarCadCliente(id: number){
    const cadClienteEncontrado = this.cadClienteService.editar(id).pipe(map(cadCliente => cadCliente));
    cadClienteEncontrado.subscribe(x => {this.cliente = x})
  }

  //Buscar lista de cidades
  buscarCadCidades(){
    this.listaCidades = new Array<CadCidade>();
    const listaRetornada = this.cadClienteService.buscarCadCidades().pipe(map(cadCidade => cadCidade));
    listaRetornada.subscribe(x => this.listaCidades = x);
  }

  // Envia as informações preenchidas nos campos de cadastro para a Service
  enviarFormularioCadastro(f: NgForm){
    this.cadCidade.id = f.value.cadastro.endCidade;

    this.cadEndereco.id = this.cliente.cadEndereco.id;
    this.cadEndereco.logradouro = f.value.cadastro.endLogradouro;
    this.cadEndereco.numero = f.value.cadastro.endNumero;
    this.cadEndereco.complemento = f.value.cadastro.endComplemento;
    this.cadEndereco.bairro = f.value.cadastro.endBairro;
    this.cadEndereco.cep = f.value.cadastro.endCep;
    this.cadEndereco.referencia = f.value.cadastro.endReferencia;

    this.cadCliente.id = this.cliente.id;
    this.cadCliente.nome = f.value.cadastro.nome;
    this.cadCliente.ddd = f.value.cadastro.ddd;
    this.cadCliente.telefone = f.value.cadastro.telefone;
    this.cadCliente.dataNascimento = f.value.cadastro.dataNascimento;
    this.cadCliente.rg = f.value.cadastro.rg;
    this.cadCliente.cpf = f.value.cadastro.cpf;

    this.cadEndereco.cadCidade = this.cadCidade;
    this.cadCliente.cadEndereco = this.cadEndereco;

    // Limpa retorno para não carregar valor incorreto
    this.response = '';

    this.cadClienteService.atualizar(this.cadCliente).subscribe(x => {this.response = x});
    
  }
}