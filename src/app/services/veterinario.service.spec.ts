import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Mensagem } from '../models/mensagem';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from './veterinario.service';

describe('VeterinarioService', () => {

  let service: VeterinarioService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VeterinarioService]
    });
    service = TestBed.inject(VeterinarioService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('listar()', ()=>{
    const lista: Veterinario[] = [
      {
        "id": 5,
        "nome": "Nomeveterinariopp sds",
        "email": "emailveterinario@gmail.com",
        "telefone": "67992409216",
        "ativo": true
      },
    ];

    service.listarVeterinario().subscribe(
      dados => expect(dados).toEqual(lista)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/veterinario');
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.responseType).toBe('json');
    testRequest.flush(lista);

  });

  it('incluir()', ()=>{
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }

    const veterinario: Veterinario = 
      {
        "id": 0,
        "nome": "Haniel",
        "email": "dala@hotmail.com",
        "telefone": "4521451452",
        "ativo": true
      };
    
    service.incluir(veterinario).subscribe(
      dados => expect(dados).toEqual(msg)
    );
    const testRequest = httpTestingController.expectOne('http://localhost:8080/veterinario')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe('Haniel')
    testRequest.flush(msg) 

  });

  it('alterar()', ()=>{
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }

    const veterinario: Veterinario = 
      {
        "id": 29,
        "nome": "Haniel",
        "email": "dalaxx@hotmail.com",
        "telefone": "4521451452",
        "ativo": true
      };
    
    service.alterar(veterinario).subscribe(
      dados => expect(dados).toEqual(msg)
    );
    const testRequest = httpTestingController.expectOne('http://localhost:8080/veterinario')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.body.nome).toBe('Haniel')
    testRequest.flush(msg) 

  });

  it('excluir()', ()=>{
    const msg:  Mensagem = {
      mensagem: '',
      erro: []
    }
    
    service.excluir('29').subscribe(
      dados => expect(dados).toEqual(msg)
    );
    const testRequest = httpTestingController.expectOne('http://localhost:8080/veterinario/29')
    expect(testRequest.request.method).toBe('DELETE')
    
    testRequest.flush(msg) 

  });

  it('buscar()', ()=>{
    const veterinario: Veterinario = 
      {
        "id": 29,
        "nome": "Haniel",
        "email": "dala@hotmail.com",
        "telefone": "4521451452",
        "ativo": true
      };

    service.buscar('29').subscribe(
      dados => expect(dados).toEqual(veterinario)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/veterinario/29');
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.responseType).toBe('json');
    testRequest.flush(veterinario);

  });



  
});
