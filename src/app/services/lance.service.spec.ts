import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Lance } from '../models/lance';
import { Mensagem } from '../models/mensagem';
import { LanceService } from './lance.service';

describe('LanceService', () => {
  let service: LanceService;
  let httpTestingController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [LanceService]
    });
    service = TestBed.inject(LanceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('listar()', () => {
    const lista: Lance[] = [
      {
        "id": 0,
        "data": new Date('2022-02-10'),
        "valor": 3109.1,
        "ativo": true,
        "idComprador": 8,
        "idLeilao": 6,
        "idAnimal": 6
      }
    ];

    service.listar().subscribe(
      dados => expect(dados).toEqual(lista)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/lance');
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.responseType).toBe('json');
    testRequest.flush(lista);
  })

  it ('incluir()', () => {
    const msg: Mensagem = {
      mensagem: '',
      erro: []
    }
    const lance: Lance = 
    {
      "id": 10,
      "data": new Date('2022-02-10'),
      "valor": 3109.1,
      "ativo": true,
      "idComprador": 8,
      "idLeilao": 6,
      "idAnimal": 6
    }

    service.incluir(lance).subscribe(
      dados => expect(dados).toEqual(msg)
    );
    const testRequest = httpTestingController.expectOne('http://localhost:8080/lance')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.responseType).toBe('json')
    testRequest.flush(msg)
  });

  it ('alterar()', () => {
    const msg: Mensagem = {
      mensagem: '',
      erro: []
    }
    const lance: Lance = {
      "id": 10,
      "data": new Date('2021-01-10'),
      "valor": 3400.0,
      "ativo": true,
      "idComprador": 4,
      "idLeilao": 7,
      "idAnimal": 5
    }

    service.alterar(lance).subscribe(
      dados => expect(dados).toEqual(msg)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/lance')
    expect(testRequest.request.method).toBe('PUT')
    testRequest.flush(msg)
  });
});
