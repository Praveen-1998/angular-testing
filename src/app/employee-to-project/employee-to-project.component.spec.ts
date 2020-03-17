import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeToProjectComponent } from './employee-to-project.component';

describe('EmployeeToProjectComponent', () => {
  let component: EmployeeToProjectComponent;
  let fixture: ComponentFixture<EmployeeToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
