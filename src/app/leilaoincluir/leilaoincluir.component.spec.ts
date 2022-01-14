import { LeilaoService } from './../services/leilao.service';
import { NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoincluirComponent } from './leilaoincluir.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LeilaoincluirComponent', () => {
  let component: LeilaoincluirComponent;
  let fixture: ComponentFixture<LeilaoincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoincluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', ()=>{

    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Incluir Leilao";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);

  });

  it('Botao Salvar', () => {

    const botao = fixture.debugElement.nativeElement.querySelector("#salvar");
    let expected: string ="Enviar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);

  });
});
