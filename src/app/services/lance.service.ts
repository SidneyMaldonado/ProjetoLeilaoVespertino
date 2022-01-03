import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lance } from '../models/lance';
import { Mensagem } from '../models/mensagem';

@Injectable({
  providedIn: 'root'
})
export class LanceService {

  constructor(private http: HttpClient) { }

  lancelistar(): Observable<any>{
    return this.http.get<Lance>("http://localhost:8080/lance");
  }
  buscar( id: string  ): Observable<Lance>{
    return this.http.get<Lance>("http://localhost:8080/lance/" + id);
  }

  incluir(lance: Lance): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/lance", lance);
  }
  
  alterar(lance: Lance): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/lance", lance);
  }
}
