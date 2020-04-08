import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadClienteEditarComponent } from './cad-cliente-editar.component';

describe('CadClienteEditarComponent', () => {
  let component: CadClienteEditarComponent;
  let fixture: ComponentFixture<CadClienteEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadClienteEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadClienteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
