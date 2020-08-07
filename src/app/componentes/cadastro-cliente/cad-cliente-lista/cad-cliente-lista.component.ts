import { CadCliente } from './../../../models/cad-cliente';
import { map } from 'rxjs/operators';
import { CadClienteService } from './../../../services/cad-cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from "@angular/forms"
import { CadClienteFilter } from 'src/app/models/cad-cliente-filter';

@Component({
  selector: 'app-cad-cliente-lista',
  templateUrl: './cad-cliente-lista.component.html',
  styleUrls: ['./cad-cliente-lista.component.css']
})
export class CadClienteListaComponent implements OnInit {

  listaClientes: Array<CadCliente>;
  cadClienteFilter = {} as CadClienteFilter;

  constructor(private cadClienteService: CadClienteService) { }  

  ngOnInit() {
    this.listar();
  }

  // Chama a service para obter a lista de clientes já cadastrados no sistema
  listar(){
    const listaFiltrada = this.cadClienteService.listar().pipe(map(cadCliente => cadCliente));
    listaFiltrada.subscribe(x => this.listaClientes = x);
  }
  
  // Envia as informações preenchidas nos campos de filtro para a Service, retorna a lista de registros encontrados e atualiza a listaClientes exibida na tela
  enviarFormularioFiltro(f: NgForm) {
    this.cadClienteFilter.nome = f.value.filter.nome;
    this.cadClienteFilter.telefone = f.value.filter.telefone;
    this.cadClienteFilter.rg = f.value.filter.rg;
    this.cadClienteFilter.cpf = f.value.filter.cpf;
    
    const listaFiltrada = this.cadClienteService.listarComFiltro(this.cadClienteFilter).pipe(map(cadCliente => cadCliente));
    listaFiltrada.subscribe(x => {this.listaClientes = x})
    this.cleanForm(f);
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    //this.listar();
    form.resetForm();
    this.cadClienteFilter = {} as CadClienteFilter;
  }

   // Deleta um cliente cadastrado
  deletar(cadCliente: CadCliente){
    this.cadClienteService.deletar(cadCliente).subscribe(() => { 
      this.listar();
    }); 
  }
}
