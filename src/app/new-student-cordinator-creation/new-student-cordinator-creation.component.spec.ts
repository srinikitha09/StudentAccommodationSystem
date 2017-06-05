import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentCordinatorCreationComponent } from './new-student-cordinator-creation.component';

describe('NewStudentCordinatorCreationComponent', () => {
  let component: NewStudentCordinatorCreationComponent;
  let fixture: ComponentFixture<NewStudentCordinatorCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStudentCordinatorCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentCordinatorCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
