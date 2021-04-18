import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaacBuscaPorNomeComponent } from './gaac-busca-por-nome.component';

describe('GaacBuscaPorNomeComponent', () => {
  let component: GaacBuscaPorNomeComponent;
  let fixture: ComponentFixture<GaacBuscaPorNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaacBuscaPorNomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaacBuscaPorNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
