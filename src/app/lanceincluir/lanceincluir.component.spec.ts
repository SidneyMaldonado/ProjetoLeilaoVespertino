import { LanceService } from './../services/lance.service';
import { NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceincluirComponent } from './lanceincluir.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LanceincluirComponent', () => {
  let component: LanceincluirComponent;
  let fixture: ComponentFixture<LanceincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanceincluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LanceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', ()=>{

    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Incluir Lance";
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
