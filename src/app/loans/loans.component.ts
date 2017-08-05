import { Component, OnInit } from '@angular/core';
import { BankService } from './bank.service';
import { BankModel } from '../shared/bank.model';

@Component({
  selector: 'c24-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
  providers: [ BankService ]
})
export class LoansComponent implements OnInit {
  loanAmount: number;
  duration: number;
  purpose: string;
  banks: BankModel[] = [];

  constructor(private bankService: BankService) {
    this.bankService.getBanks().subscribe(
      data => {
        this.loanAmount = data.loanAmount;
        this.duration = data.duration;
        this.purpose = data.purpose;
        this.banks = data.result;
      },
      error => alert(error)
    );
  }

  ngOnInit() {
  }
}
