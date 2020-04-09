import { CadClienteService } from './../../../services/cad-cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from "@angular/forms"
import { CadClienteFilter } from 'src/app/models/cad-cliente-filter';
import { CadCliente } from 'src/app/models/cad-cliente';

@Component({
  selector: 'app-cad-cliente-lista',
  templateUrl: './cad-cliente-lista.component.html',
  styleUrls: ['./cad-cliente-lista.component.css']
})
export class CadClienteListaComponent implements OnInit {

  listaClientes: Array<CadCliente>;
  cadClienteFilter = {} as CadClienteFilter;
  listaFiltrada: Array<CadCliente> = [];
  
  //variáveis do formulário do filtro
  nome: string;
  telefone: number;
  rg: number;
  cpf: number;

  constructor(private cadClienteService: CadClienteService) { }  

  ngOnInit() {
    this.listar();
  }

  // Chama a service para obter a lista de clientes já cadastrados no sistema
  listar(){
    this.cadClienteService.listar().subscribe(dados => this.listaClientes = dados);
  }
  
  enviarFormularioFiltro(f: NgForm) {
    this.cadClienteFilter.nome = f.value.filter.nome;
    this.cadClienteFilter.telefone = f.value.filter.telefone;
    this.cadClienteFilter.rg = f.value.filter.rg;
    this.cadClienteFilter.cpf = f.value.filter.cpf;
    
    this.cadClienteService.listarComFiltro(this.cadClienteFilter).subscribe((dados) => { this.cleanForm(f); });
    console.log("Component = " + this.listaClientes);
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    //this.listar();
    form.resetForm();
    this.cadClienteFilter = {} as CadClienteFilter;
  }
}
