import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadClienteService {

  cadClienteUrl = 'http://localhost:8084/cadastro-cliente/lista';

  constructor(private http: HttpClient) { }

  detalhar(){
    return this.http.get<any[]>(`${this.cadClienteUrl}`);
  }
}
