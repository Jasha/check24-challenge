import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoansComponent } from './loans/loans.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/loans', pathMatch: 'full' },
  { path: 'loans', component: LoansComponent },
  { path: 'loan/:id', component: ApplyForLoanComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
