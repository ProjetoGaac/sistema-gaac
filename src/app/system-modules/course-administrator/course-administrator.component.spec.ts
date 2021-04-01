import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdministratorComponent } from './course-administrator.component';

describe('CourseAdministratorComponent', () => {
  let component: CourseAdministratorComponent;
  let fixture: ComponentFixture<CourseAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
