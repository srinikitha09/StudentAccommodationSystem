import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookAccommodationComponent } from './student-book-accommodation.component';

describe('StudentBookAccommodationComponent', () => {
  let component: StudentBookAccommodationComponent;
  let fixture: ComponentFixture<StudentBookAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBookAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBookAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
