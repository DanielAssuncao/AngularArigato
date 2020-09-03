import { AppConstants } from './../app-constants';
import { CadClienteFilter } from 'src/app/models/cad-cliente-filter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { CadCliente } from './../models/cad-cliente';
import { CadCidade } from '../models/cad-cidade';

@Injectable({
  providedIn: 'root'
})
export class CadClienteService {

  _baseURL: string;
  areaUrl = '/cadastro-cliente';

  cadCliente: CadCliente;
  cadCidade: CadCidade;
  listaCadCliente: Array<CadCliente> = [];

  constructor(private httpClient: HttpClient) { this._baseURL = AppConstants.baseURL + this.areaUrl}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({  'Content-Type': 'application/json' })
  }
  httpOptionsString = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    responseType: "text" as "json"
  };

  // Obtem a lista de todos os clientes cadastrados no sistema
  listar(): Observable<CadCliente[]>{
    return this.httpClient.get<CadCliente[]>(this._baseURL + '/lista', this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  // Obtem a lista de todos os clientes cadastrados no sistema de acordo com o filtro inserido
  listarComFiltro(filter : CadClienteFilter): Observable<CadCliente[]>{
    return this.httpClient.post<CadCliente[]>(this._baseURL + '/lista', JSON.stringify(filter), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  // Deleta um cliente cadastrado
  deletar(cadCliente: CadCliente){
    return this.httpClient.get<CadCliente>(this._baseURL + '/deletar?id=' + cadCliente.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Editar um cliente cadastrado
  editar(id : number): Observable<CadCliente>{
    return this.httpClient.post<CadCliente>(this._baseURL + '/editar', JSON.stringify(id), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  // Atualiza um cliente cadastrado
  atualizar(cadCliente : CadCliente): Observable<String>{
    return this.httpClient.post<String>(this._baseURL + '/atualizar', JSON.stringify(cadCliente), this.httpOptionsString)
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
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  buscarCadCidades(): Observable<CadCidade[]>{
    return this.httpClient.get<CadCidade[]>(this._baseURL + '/buscarCadCidades', this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }
}
