import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from './../services/animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { AnimalincluirComponent } from './animalincluir.component';
import { Animal } from '../models/animal';

describe('AnimalincluirComponent', () => {
  let component: AnimalincluirComponent;
  let fixture: ComponentFixture<AnimalincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalincluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo renderizado', ()=>{

    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Incluir Animal";
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
