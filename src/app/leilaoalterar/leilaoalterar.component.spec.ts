import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LeilaoService } from '../services/leilao.service';

import { LeilaoalterarComponent } from './leilaoalterar.component';

describe('LeilaoalterarComponent', () => {
  let component: LeilaoalterarComponent;
  let fixture: ComponentFixture<LeilaoalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoalterarComponent, NgForm ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Titulo renderizado',()=>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Alterar Leilao";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);

  });
  it('Botao Salvar', () => {

    const botao = fixture.debugElement.nativeElement.querySelector("#alterar");
    let expected: string ="Enviar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);

  });
});
