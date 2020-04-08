import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadClienteListaComponent } from './cad-cliente-lista.component';

describe('CadClienteListaComponent', () => {
  let component: CadClienteListaComponent;
  let fixture: ComponentFixture<CadClienteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadClienteListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
