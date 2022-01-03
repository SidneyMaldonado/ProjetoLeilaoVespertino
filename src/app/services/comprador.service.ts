import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from '../models/comprador';
import { Mensagem } from '../models/mensagem';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  constructor( private http: HttpClient) { }
  
  listar(): Observable<Comprador[]>{
    return this.http.get<Comprador[]>("http://localhost:8080/comprador")
  }
  buscar(id: string): Observable<Comprador>{
    return this.http.get<Comprador>("http://localhost:8080/comprador/"+ id);
  }
  incluir(comprador: Comprador): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/comprador", comprador);
  }
  alterar(comprador: Comprador): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/comprador", comprador);
  }
  excluir(id: string ): Observable<Mensagem>{
    return this.http.delete<Mensagem>("http://localhost:8080/comprador/"+id)
  }
  

}
