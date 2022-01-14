import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarioService } from '../services/veterinario.service';

import { VeterinarioexcluirComponent } from './veterinarioexcluir.component';

describe('VeterinarioexcluirComponent', () => {
  let component: VeterinarioexcluirComponent;
  let fixture: ComponentFixture<VeterinarioexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioexcluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VeterinarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', () =>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected : string = "Veterinário excluir";
    let result = titulo.innerHTML;
    expect(result).toEqual(expected);
  });

  it('Botao excluir', ()=>{
    const botao = fixture.debugElement.nativeElement.querySelector("#excluir");
    let expected: string = "Confirmar Exclusão";
    let result = botao.innerHTML;
    expect(result).toEqual(expected);
  })

});



