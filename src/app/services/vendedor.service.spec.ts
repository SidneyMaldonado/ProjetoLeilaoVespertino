import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Mensagem } from '../models/mensagem';
import { Vendedor } from '../models/vendedor';
import { AnimalService } from './animal.service';
import { VendedorService } from './vendedor.service';

describe('VendedorService', () => {
  let service: VendedorService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [AnimalService]
    });
    service = TestBed.inject(VendedorService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('listar()',() =>{
    const lista:Vendedor[] = [
      {
        "id": 12,
        "nome": "asdasd",
        "email": "emailvenasdedor1@gmail.com",
        "telefone": "67992409212",
        "ativo": true
      }
    ];
    service.listar().subscribe(
      dados => expect(dados).toEqual(lista)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor');
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.responseType).toBe('json');
    testRequest.flush(lista);
   });

   it('incluir()', ()=>{
     const msg: Mensagem = {
       mensagem: '',
       erro:[]
     }
     const vendedor: Vendedor =
      {
        "id": 0,
        "nome": "Eqzeowijou",
        "email": "emailveiininasdedor1@gmail.com",
        "telefone": "67912999212",
        "ativo": true
    };
    service.incluir(vendedor).subscribe(
      dados => expect(dados).toEqual(msg)
    );
    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe('Eqzeowijou')
    testRequest.flush(msg)

     }

   );
   it('alterar()', () => {
     const msg: Mensagem = {
       mensagem: '',
       erro:[]
     }
     const vendedor: Vendedor={
        "id": 11,
        "nome": "asdasd",
        "email": "emailvenasdedor1@gmail.com",
        "telefone": "67992477212",
        "ativo": true
    }
    service.alterar(vendedor).subscribe(
      dados => expect(dados).toEqual(msg)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor/')
    expect(testRequest.request.method).toBe('PUT')
    testRequest.flush(msg)

     
   });

   it('excluir()', () =>{
     const msg: Mensagem = {
       mensagem: '',
       erro: []
     }
     service.excluir('18').subscribe(
       dados => expect(dados).toEqual(msg)
     )
     const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor/18')
     expect(testRequest.request.method).toBe('DELETE')
     testRequest.flush(msg)
   });

   it('buscar()', () =>{
     const msg: Mensagem = {
       mensagem: '',
       erro: []
     }
     const vendedor: Vendedor =
      {
        "id": 0,
        "nome": "",
        "email": "",
        "telefone": "",
        "ativo": true
    };
     service.buscar('15').subscribe(
       dados => expect(dados).toEqual(vendedor)

     )
     const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor/15')
     expect(testRequest.request.method).toBe('GET')
     testRequest.flush(vendedor)
   })

  


});
