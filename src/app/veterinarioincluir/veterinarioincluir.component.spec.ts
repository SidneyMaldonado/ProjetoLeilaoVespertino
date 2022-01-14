import { NgForm } from '@angular/forms';
import { VeterinarioService } from './../services/veterinario.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioincluirComponent } from './veterinarioincluir.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VeterinarioincluirComponent', () => {
  let component: VeterinarioincluirComponent;
  let fixture: ComponentFixture<VeterinarioincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioincluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VeterinarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', ()=>{

    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Incluir Veterinario";
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
