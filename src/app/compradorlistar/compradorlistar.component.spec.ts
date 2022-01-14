import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReadPropExpr } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompradorService } from '../services/comprador.service';

import { CompradorlistarComponent } from './compradorlistar.component';

describe('CompradorlistarComponent', () => {
  let component: CompradorlistarComponent;
  let fixture: ComponentFixture<CompradorlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorlistarComponent ],
      imports: [HttpClientTestingModule],
      providers:[CompradorService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('O titulo deve aparecer',() => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Lista de Compradores";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected)
  });

  it('O rodape deve aparecer',() =>{
    const rodape = fixture.debugElement.nativeElement.querySelector("#rodape");
    let expected: string ="todos os direitos reservados";
    let result: string = rodape.innerHTML;
    expect(result).toEqual(expected)
  })
});
