import { Animal } from './../models/animal';
import { TestBed } from '@angular/core/testing';
import { AnimalService } from './animal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Mensagem } from '../models/mensagem';

describe('AnimalService', () => {

  let service: AnimalService;
  let httpTestingController: HttpTestingController
 
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [AnimalService]
    });
    service = TestBed.inject(AnimalService);
    httpTestingController = TestBed.inject(HttpTestingController);
  
  });

  it('should be create', ()=>{
    expect(service).toBeTruthy();
  });

  it('listar()',() =>{
    const  lista: Animal[] = [      
          {
            "id": 5,
            "nome": "Animal5",
            "registro": "111111",
            "preco": 1000.0,
            "raca": "Raça5",
            "ativo": true,
            "idVendedor": 5,
            "idVeterinario": 5,
          }
      ];

      service.listar().subscribe(
        dados => expect(dados).toEqual(lista)
      )
      const testRequest = httpTestingController.expectOne('http://localhost:8080/animal');
      expect(testRequest.request.method).toBe('GET');
      expect(testRequest.request.responseType).toBe('json');
      testRequest.flush(lista);
  });

  it('incluir()', ()=>{
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }
    const animal: Animal=
      {
        "id": 0,
        "nome": "Animal55555",
        "registro": "111111",
        "preco": 1000.0,
        "raca": "Raça5",
        "ativo": true,
        "idVendedor": 5,
        "idVeterinario": 5,
      };

      service.incluir(animal).subscribe(
        dados => expect(dados).toEqual(msg)
      );
      const testRequest = httpTestingController.expectOne('http://localhost:8080/animal')
      expect(testRequest.request.method).toBe('POST')
      expect(testRequest.request.body.nome).toBe('Animal55555')
      testRequest.flush(msg) 

  });

  it('alterar()', () => {
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }
    const animal: Animal={
      "id": 2,
      "nome": "Animal55555",
      "registro": "123",
      "preco": 1500.0,
      "raca": "Nelore",
      "ativo": false,
      "idVendedor": 2,
      "idVeterinario": 2
    }

    service.alterar(animal).subscribe(
      dados => expect(dados).toEqual(msg)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/animal')
    expect(testRequest.request.method).toBe('PUT')
    testRequest.flush(msg) 
  });

})
