import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreateProjectComponent } from './new-create-project.component';

describe('NewCreateProjectComponent', () => {
  let component: NewCreateProjectComponent;
  let fixture: ComponentFixture<NewCreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreateProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
