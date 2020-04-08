import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadClienteNovoComponent } from './cad-cliente-novo.component';

describe('CadClienteNovoComponent', () => {
  let component: CadClienteNovoComponent;
  let fixture: ComponentFixture<CadClienteNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadClienteNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadClienteNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
