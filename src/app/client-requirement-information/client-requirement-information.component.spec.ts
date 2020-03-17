import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRequirementInformationComponent } from './client-requirement-information.component';

describe('ClientRequirementInformationComponent', () => {
  let component: ClientRequirementInformationComponent;
  let fixture: ComponentFixture<ClientRequirementInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRequirementInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRequirementInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
