import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForLoanFormComponent } from './apply-for-loan-form.component';

describe('ApplyForLoanFormComponent', () => {
  let component: ApplyForLoanFormComponent;
  let fixture: ComponentFixture<ApplyForLoanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForLoanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
