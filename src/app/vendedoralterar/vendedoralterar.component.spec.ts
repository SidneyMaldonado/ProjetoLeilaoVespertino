import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VendedorService } from '../services/vendedor.service';

import { VendedoralterarComponent } from './vendedoralterar.component';

describe('VendedoralterarComponent', () => {
  let component: VendedoralterarComponent;
  let fixture: ComponentFixture<VendedoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoralterarComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VendedorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoralterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Titulo renderizado', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Alterar Vendedor";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);
  })

  it ('Botao Alterar', () => {
    const botao = fixture.debugElement.nativeElement.querySelector("#alterar");
    let expected: string = "Enviar";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);
  })
});
