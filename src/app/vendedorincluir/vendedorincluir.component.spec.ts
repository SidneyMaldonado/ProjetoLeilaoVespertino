import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VendedorService } from '../services/vendedor.service';

import { VendedorincluirComponent } from './vendedorincluir.component';

describe('VendedorincluirComponent', () => {
  let component: VendedorincluirComponent;
  let fixture: ComponentFixture<VendedorincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorincluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VendedorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Titulo renderizado', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Incluir Vendedor";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);
  });

  it ('Botao Salvar', () => {
    const botao = fixture.debugElement.nativeElement.querySelector("#salvar");
    let expected: string = "Enviar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);
  })
});
