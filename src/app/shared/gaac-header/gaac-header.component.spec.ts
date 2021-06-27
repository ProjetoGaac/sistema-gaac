import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaacHeaderComponent } from './gaac-header.component';

describe('GaacHeaderComponent', () => {
  let component: GaacHeaderComponent;
  let fixture: ComponentFixture<GaacHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaacHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaacHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
