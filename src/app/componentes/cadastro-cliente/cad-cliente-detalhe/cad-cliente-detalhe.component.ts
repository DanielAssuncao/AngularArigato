import { CadClienteService } from './../../../services/cad-cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-cliente-detalhe',
  templateUrl: './cad-cliente-detalhe.component.html',
  styleUrls: ['./cad-cliente-detalhe.component.css']
})
export class CadClienteDetalheComponent implements OnInit {

  cliente: Array<any>;

  constructor(private cadClienteService: CadClienteService) { }

  ngOnInit() {
    this.detalhar();
  }

  detalhar(){
    this.cadClienteService.detalhar().subscribe(dados => this.cliente = dados);
  }
}
