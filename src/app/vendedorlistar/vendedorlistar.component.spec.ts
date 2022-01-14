import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalService } from '../services/animal.service';
import { VendedorService } from '../services/vendedor.service';

import { VendedorlistarComponent } from './vendedorlistar.component';

describe('VendedorlistarComponent', () => {
  let component: VendedorlistarComponent;
  let fixture: ComponentFixture<VendedorlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorlistarComponent ],
      imports: [HttpClientTestingModule],
      providers: [VendedorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('O titulo deve aparecer',() => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Lista de Vendedores";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected)
  });

  it('O rodape deve aparecer',() => {
    const rodape = fixture.debugElement.nativeElement.querySelector("#rodape");
    let expected: string = "todos os direitos reservados"
    let result = rodape.innerHTML;
    console.log(rodape.innerHTML)
    expect(result).toEqual(expected);
  })


});
