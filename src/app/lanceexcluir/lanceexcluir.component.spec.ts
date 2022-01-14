import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LanceService } from '../services/lance.service';
import { LanceexcluirComponent } from './lanceexcluir.component';

describe('LanceexcluirComponent', () => {
  let component: LanceexcluirComponent;
  let fixture: ComponentFixture<LanceexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanceexcluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LanceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Titulo renderizado', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Excluir Lance";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected);
  })

  it ('Botao excluir', () => {
    const botao = fixture.debugElement.nativeElement.querySelector("#excluir");
    let expected: string = "Confirmar Exclusão";
    let result: string = botao.innerHTML;
    expect(result).toEqual(expected);
  })
});
