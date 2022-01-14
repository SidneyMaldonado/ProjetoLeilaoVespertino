import { NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradoralterarComponent } from './compradoralterar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompradorService } from '../services/comprador.service';

describe('CompradoralterarComponent', () => {
  let component: CompradoralterarComponent;
  let fixture: ComponentFixture<CompradoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradoralterarComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradoralterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', ()=>{

    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Alterar Comprador";
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
