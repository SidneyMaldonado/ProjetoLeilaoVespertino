import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalService } from '../services/animal.service';
import { LeilaoService } from '../services/leilao.service';

import { LeilaolistarComponent } from './leilaolistar.component';

describe('LeilaolistarComponent', () => {
  let component: LeilaolistarComponent;
  let fixture: ComponentFixture<LeilaolistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaolistarComponent ],
      imports:[HttpClientTestingModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaolistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('O titulo deve aparecer',() => {
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Lista de Leilões";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected)
  });

  it('O rodape deve aparecer',() =>{
    const rodape = fixture.debugElement.nativeElement.querySelector("#rodape");
    let expected: string ="todos os direitos reservados";
    let result: string = rodape.innerHTML;
    console.log(rodape.innerHTML)
    expect(result).toEqual(expected)
  });
});
