import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForLoanComponent } from './apply-for-loan.component';

describe('ApplyForLoanComponent', () => {
  let component: ApplyForLoanComponent;
  let fixture: ComponentFixture<ApplyForLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
