import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeterinarioService } from '../services/veterinario.service';

import { VeterinariolistarComponent } from './veterinariolistar.component';

describe('VeterinariolistarComponent', () => {
  let component: VeterinariolistarComponent;
  let fixture: ComponentFixture<VeterinariolistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariolistarComponent ],
      imports: [HttpClientTestingModule],
      providers: [VeterinarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariolistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('O titulo deve aparecer', () =>{
    const titulo = fixture.debugElement.nativeElement.querySelector("#title");
    let expected: string = "Lista de Veterinário";
    let result = titulo.innerHTML;
    expect(result).toEqual(expected);
  })

  it('O rodape deve aparecer', ()=>{
    const rodape = fixture.debugElement.nativeElement.querySelector("#rodape");
    let expected: string = "rodape";
    let result = rodape.innerHTML;
    expect(result).toEqual(expected);
  })
});
