import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LeilaoService } from '../services/leilao.service';

import { LeilaoexcluirComponent } from './leilaoexcluir.component';

describe('LeilaoexcluirComponent', () => {
  let component: LeilaoexcluirComponent;
  let fixture: ComponentFixture<LeilaoexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoexcluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Titulo renderizado', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Excluir Leilao";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);
  })

  it ('Botao Excluir', () => {
    const botao = fixture.debugElement.nativeElement.querySelector("#excluir");
    let expected: string = "Confirmar Exclusão";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);
  })
});
