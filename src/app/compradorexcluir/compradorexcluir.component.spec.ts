import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompradorService } from '../services/comprador.service';

import { CompradorexcluirComponent } from './compradorexcluir.component';

describe('CompradorexcluirComponent', () => {
  let component: CompradorexcluirComponent;
  let fixture: ComponentFixture<CompradorexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorexcluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('titulo redenrizado', ()=>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Comprador excluir";
    let result = titulo.innerHTML;
    expect(result).toEqual(expected);
  });

  it('botao excluir', ()=>{
    const botao = fixture.debugElement.nativeElement.querySelector("#excluir");
    let expected: string = "Confirmar Exclusão";
    let result = botao.innerHTML;
    expect(result).toEqual(expected);
  });

});
