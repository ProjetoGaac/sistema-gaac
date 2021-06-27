import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaacFooterComponent } from './gaac-footer.component';

describe('GaacFooterComponent', () => {
  let component: GaacFooterComponent;
  let fixture: ComponentFixture<GaacFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaacFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaacFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
