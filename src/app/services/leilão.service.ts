import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leilao } from '../models/leilao';
import { Mensagem } from '../models/mensagem';

@Injectable({
  providedIn: 'root'
})
export class LeilãoService {

  constructor(private http : HttpClient) { }

  listar(): Observable<Leilao[]>{
    return this.http.get<Leilao[]>("http://localhost:8080/leilao")
  }
  incluir(leilao: Leilao): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/leilao", leilao);
  }
}
