import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaacQuantidadePorPaginaComponent } from './gaac-quantidade-por-pagina.component';

describe('GaacQuantidadePorPaginaComponent', () => {
  let component: GaacQuantidadePorPaginaComponent;
  let fixture: ComponentFixture<GaacQuantidadePorPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaacQuantidadePorPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaacQuantidadePorPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
