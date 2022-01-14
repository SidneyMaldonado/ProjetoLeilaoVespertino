import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarioService } from '../services/veterinario.service';

import { VeterinarioalterarComponent } from './veterinarioalterar.component';

describe('VeterinarioalterarComponent', () => {
  let component: VeterinarioalterarComponent;
  let fixture: ComponentFixture<VeterinarioalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioalterarComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VeterinarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo redenrizado', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Veterinário alterar";
    let result = titulo.innerHTML;

    expect(result).toEqual(expected);
  });

  it('Botao alterar', () => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#alterar");
    let expected: string = "Confirmar Alteração";
    let result = titulo.innerHTML;

    expect(result).toEqual(expected);
  });


});
