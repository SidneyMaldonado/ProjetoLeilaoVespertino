import { AnimalService } from './../services/animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalalterarComponent } from './animalalterar.component';

describe('AnimalalterarComponent', () => {
  let component: AnimalalterarComponent;
  let fixture: ComponentFixture<AnimalalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalalterarComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', ()=>{

    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Alterar Animal";
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
