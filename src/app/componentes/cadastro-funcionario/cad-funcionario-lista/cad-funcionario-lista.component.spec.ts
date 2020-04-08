import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFuncionarioListaComponent } from './cad-funcionario-lista.component';

describe('CadFuncionarioListaComponent', () => {
  let component: CadFuncionarioListaComponent;
  let fixture: ComponentFixture<CadFuncionarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFuncionarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFuncionarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
