import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VendedorService } from '../services/vendedor.service';

import { VendedorexcluirComponent } from './vendedorexcluir.component';

describe('VendedorexcluirComponent', () => {
  let component: VendedorexcluirComponent;
  let fixture: ComponentFixture<VendedorexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorexcluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VendedorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Titulo renderizado', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Excluir Vendedor";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);
  })

  it ('Botao Excluir', () => {
    const botao = fixture.debugElement.nativeElement.querySelector("#excluir");
    let expected: string = "Confirmar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);
  })
});
