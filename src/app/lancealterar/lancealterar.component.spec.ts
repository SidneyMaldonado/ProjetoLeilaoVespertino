import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LanceService } from '../services/lance.service';

import { LancealterarComponent } from './lancealterar.component';

describe('LancealterarComponent', () => {
  let component: LancealterarComponent;
  let fixture: ComponentFixture<LancealterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancealterarComponent ,NgForm],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[LanceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancealterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Titulo renderizado',()=>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Alterar Lance";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);
  });
  it('Botao Salvar',()=>{
    const botao = fixture.debugElement.nativeElement.querySelector('#alterar');
    let expected: string = "Enviar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);

  });
  




});
