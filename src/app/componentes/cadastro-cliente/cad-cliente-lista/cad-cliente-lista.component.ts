import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-cad-cliente-lista',
  templateUrl: './cad-cliente-lista.component.html',
  styleUrls: ['./cad-cliente-lista.component.css']
})
export class CadClienteListaComponent implements OnInit {

  data: any;

  cadastroCliente = new FormGroup({
    nomeCliente: new FormControl(''),
    rgCliente: new FormControl(''),
    cpfCliente: new FormControl(''),
    telefoneCliente: new FormControl('')
  })
  constructor() { }

  ngOnInit() {}

  enviarDados() {
    this.data = this.cadastroCliente.value;
  }

}
