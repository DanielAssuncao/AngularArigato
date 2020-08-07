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
  listaCidades: Array<CadCidade>;

  constructor(private cadClienteService: CadClienteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.buscarCadCliente(this.id);
  }

  // Voltar para tela anterior
  goBack() {
    window.history.back();
  }

  // Buscar cliente por id
  buscarCadCliente(id: number){
    const cadClienteEncontrado = this.cadClienteService.editar(id).pipe(map(cadCliente => cadCliente));
    cadClienteEncontrado.subscribe(x => {this.cliente = x, console.log(this.cliente)})
  }

  //Buscar lista de cidades
  buscarCadCidades(){
    this.listaCidades = new Array<CadCidade>();
    const listaRetornada = this.cadClienteService.buscarCadCidades().pipe(map(cadCidade => cadCidade));
    listaRetornada.subscribe(x => this.listaCidades = x);
  }

  // Envia as informações preenchidas nos campos de cadastro para a Service
  enviarFormularioCadastro(f: NgForm){
    this.cadCliente.id = f.value.cadastro.id;
    this.cadCliente.nome = f.value.cadastro.nome;
    this.cadCliente.ddd = f.value.cadastro.ddd;
    this.cadCliente.telefone = f.value.cadastro.telefone;
    this.cadCliente.dataNascimento = f.value.cadastro.dataNascimento;
    this.cadCliente.rg = f.value.cadastro.rg;
    this.cadCliente.cpf = f.value.cadastro.cpf;

    this.cadCliente.cadEndereco.logradouro = f.value.cadastro.endLogradouro;
    this.cadCliente.cadEndereco.numero = f.value.cadastro.endNumero;
    this.cadCliente.cadEndereco.complemento = f.value.cadastro.endComplemento;
    this.cadCliente.cadEndereco.bairro = f.value.cadastro.endBairro;
    this.cadCliente.cadEndereco.cep = f.value.cadastro.endCep;
    this.cadCliente.cadEndereco.referencia = f.value.cadastro.endReferencia;

    this.cadClienteService.atualizar(this.cadCliente);
  }
}
