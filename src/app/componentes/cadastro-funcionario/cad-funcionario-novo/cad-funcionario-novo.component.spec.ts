import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFuncionarioNovoComponent } from './cad-funcionario-novo.component';

describe('CadFuncionarioNovoComponent', () => {
  let component: CadFuncionarioNovoComponent;
  let fixture: ComponentFixture<CadFuncionarioNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFuncionarioNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFuncionarioNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
