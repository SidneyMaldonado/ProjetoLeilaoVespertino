import { TestBed } from '@angular/core/testing';


import { CompradorService } from './comprador.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Comprador } from '../models/comprador';
import { Mensagem } from '../models/mensagem';

describe('CompradorService',() =>{
  let service: CompradorService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [CompradorService]
    });
    service = TestBed.inject(CompradorService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('listar()',() => {
    const lista : Comprador [] =[
        {"id": 17,
        "nome": "Luizzz",
        "email": "luizzz@gmail.com",
        "telefone": "6712345677",
        "ativo": true
        }
    ];

      service.listar().subscribe(
        dados => expect(dados).toEqual(lista)
      )
      const testRequest = httpTestingController.expectOne('http://localhost:8080/comprador');
      expect(testRequest.request.method).toBe('GET');
      expect(testRequest.request.responseType).toBe('json');
      testRequest.flush(lista);
  });

  it('incluir()',() => {
    const msg : Mensagem ={
      mensagem: '',
      erro: []
    }

    const comprador : Comprador = {
        "id": 0,
        "nome": "Luiza",
        "email": "luiza@gmail.com",
        "telefone": "6714545677",
        "ativo": true
    }
    service.incluir(comprador).subscribe(
      dados => expect(dados).toEqual(msg)
    );
    const testRequest = httpTestingController.expectOne('http://localhost:8080/comprador');
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe("Luiza")
    testRequest.flush(msg)
  })

  it('alterar()',() => {
    const msg : Mensagem ={
      mensagem: '',
      erro: []
    }
  
    const comprador : Comprador = {
        "id": 17,
        "nome": "Luisa",
        "email": "luisa@gmail.com",
        "telefone": "6714545688",
        "ativo": true
    }

    service.alterar(comprador).subscribe(
      dados => expect (dados).toEqual(msg)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/comprador');
    expect(testRequest.request.method).toBe('PUT')
    testRequest.flush(msg)
  });
  
});






