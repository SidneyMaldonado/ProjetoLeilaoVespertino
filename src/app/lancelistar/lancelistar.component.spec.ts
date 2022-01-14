import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanceService } from '../services/lance.service';

import { LancelistarComponent } from './lancelistar.component';

describe('LancelistarComponent', () => {
  let component: LancelistarComponent;
  let fixture: ComponentFixture<LancelistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancelistarComponent],
      imports: [HttpClientTestingModule],
      providers: [LanceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancelistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('O titulo deve aparecer'), () =>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string ="Lance";
    let result: string = titulo.innerHTML;
    expect(result).toEqual(expected)
  }
  it('O rodape deve aparecer',() =>{
    const rodape = fixture.debugElement.nativeElement.querySelector("#rodape");
    let expected: string ="todos os direitos reservados";
    let result: string = rodape.innerHTML;
    expect(result).toEqual(expected)
  })
});
