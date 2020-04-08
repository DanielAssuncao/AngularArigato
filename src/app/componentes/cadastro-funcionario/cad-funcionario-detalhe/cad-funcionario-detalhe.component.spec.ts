import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFuncionarioDetalheComponent } from './cad-funcionario-detalhe.component';

describe('CadFuncionarioDetalheComponent', () => {
  let component: CadFuncionarioDetalheComponent;
  let fixture: ComponentFixture<CadFuncionarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFuncionarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFuncionarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
