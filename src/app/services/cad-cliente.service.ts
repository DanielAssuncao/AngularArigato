import { CadClienteFilter } from 'src/app/models/cad-cliente-filter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { CadCliente } from './../models/cad-cliente';

@Injectable({
  providedIn: 'root'
})
export class CadClienteService {

  cadClienteUrl = 'http://localhost:8084/cadastro-cliente/lista';
  listaFiltrada: Array<CadCliente> = [];

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem a lista de todos os clientes cadastrados no sistema
  listar(){
    return this.httpClient.get<any[]>(this.cadClienteUrl);
  }

  // Obtem a lista de todos os clientes cadastrados no sistema de acordo com o filtro inserido
  listarComFiltro(filter : CadClienteFilter): Observable<CadCliente[]>{
    return this.httpClient.post<CadCliente[]>(this.cadClienteUrl, JSON.stringify(filter), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
