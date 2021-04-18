import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaacPaginacaoComponent } from './gaac-paginacao.component';

describe('GaacPaginacaoComponent', () => {
  let component: GaacPaginacaoComponent;
  let fixture: ComponentFixture<GaacPaginacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaacPaginacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaacPaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
