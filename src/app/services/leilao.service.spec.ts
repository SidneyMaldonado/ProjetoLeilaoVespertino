import { Leilao } from './../models/leilao';
import { TestBed } from '@angular/core/testing';
import { LeilaoService } from './leilao.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Mensagem } from '../models/mensagem';

describe('LeilãoServiceService', () => {
  let service: LeilaoService;
  let httpTestingController: HttpTestingController

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [LeilaoService]
    });
    service = TestBed.inject(LeilaoService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('listar()',() =>{
    const  lista: Leilao[] = [
      {
        "id": 7,
        "data": new Date("2022-01-11"),
        "nome": "Clube do boi teste",
        "ativo": true
      }
      ];

      service.listar().subscribe(
        dados => expect(dados).toEqual(lista)
      )
      const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao');
      expect(testRequest.request.method).toBe('GET');
      expect(testRequest.request.responseType).toBe('json');
      testRequest.flush(lista);
  });

  it('incluir()', ()=>{
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }
    const leilao: Leilao=
    {
      "id": 7,
      "data": new Date("2022-01-11"),
      "nome": "Clube do boi teste",
      "ativo": true
    };

      service.incluir(leilao).subscribe(
        dados => expect(dados).toEqual(msg)
      );
      const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao')
      expect(testRequest.request.method).toBe('POST')
      expect(testRequest.request.body.nome).toBe('Clube do boi teste')
      testRequest.flush(msg)

  });

  it('alterar()', () => {
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }
    const leilao: Leilao={
      "id": 7,
      "data": new Date("2022-01-11"),
      "nome": "Clube do boi teste",
      "ativo": true
    }

    service.alterar(leilao).subscribe(
      dados => expect(dados).toEqual(msg)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao')
    expect(testRequest.request.method).toBe('PUT')
    testRequest.flush(msg)
  });

})
