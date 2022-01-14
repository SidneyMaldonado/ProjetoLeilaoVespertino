import { AnimalService } from './../services/animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimallistarComponent } from './animallistar.component';

describe('AnimallistarComponent', () => {
  let component: AnimallistarComponent;
  let fixture: ComponentFixture<AnimallistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimallistarComponent ],
      imports: [HttpClientTestingModule],
      providers: [AnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimallistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('O titulo deve aparecer', () =>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Lista de Animais";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected)
  });

  it('O rodape deve aparecer', () =>{

    const rodape = fixture.debugElement.nativeElement.querySelector("#rodape");
    let expected: string = "todos os direitos reservados"
    let result = rodape.innerHTML;
    console.log(rodape.innerHTML)
    expect(result).toEqual(expected);

  });

});
