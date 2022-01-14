import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompradorService } from '../services/comprador.service';

import { CompradorincluirComponent } from './compradorincluir.component';

describe('CompradorincluirComponent', () => {
  let component: CompradorincluirComponent;
  let fixture: ComponentFixture<CompradorincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorincluirComponent, NgForm ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers: [CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado',()=>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Incluir Comprador";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected)
  });

  it('Botao Salvar',() => {
    
    const botao = fixture.debugElement.nativeElement.querySelector("#salvar");
    let expected: string = "Enviar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected)
  });

});
