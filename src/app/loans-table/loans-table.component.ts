import { Component, Input } from '@angular/core';
import { BankModel } from '../shared/bank.model';
import { Router } from '@angular/router';

@Component({
  selector: 'c24-loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent {
  @Input() banks: BankModel[] = [];

  constructor(private router: Router) { }

  onSelectBank(bankId: number) {
    // add 1 to bankId since array index starts with 0
    this.router.navigate(['/loan', bankId + 1]);
  }
}
