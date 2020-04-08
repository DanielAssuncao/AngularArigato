import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadClienteDetalheComponent } from './cad-cliente-detalhe.component';

describe('CadClienteDetalheComponent', () => {
  let component: CadClienteDetalheComponent;
  let fixture: ComponentFixture<CadClienteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadClienteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadClienteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
