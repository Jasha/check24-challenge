import { Component } from '@angular/core';

@Component({
  selector: 'c24-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.scss']
})
export class ApplyForLoanComponent {
  // TODO: pull this data from backend
  bankName = 'Bank of Scotland';
  feedbackNumber = 2102;
  rating = 4.59;
  totalLoanAmount = 55348.58;
  months = 36;

  constructor() { }
}
