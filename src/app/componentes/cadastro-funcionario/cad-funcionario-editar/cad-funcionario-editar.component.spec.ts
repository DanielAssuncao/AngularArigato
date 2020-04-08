import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFuncionarioEditarComponent } from './cad-funcionario-editar.component';

describe('CadFuncionarioEditarComponent', () => {
  let component: CadFuncionarioEditarComponent;
  let fixture: ComponentFixture<CadFuncionarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFuncionarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFuncionarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
