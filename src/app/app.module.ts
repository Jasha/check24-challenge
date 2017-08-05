import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SelectedFilterComponent } from './selected-filter/selected-filter.component';
import { LoansTableComponent } from './loans-table/loans-table.component';
import { ApplyForLoanFormComponent } from './apply-for-loan-form/apply-for-loan-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    ApplyForLoanComponent,
    NotFoundComponent,
    SelectedFilterComponent,
    LoansTableComponent,
    ApplyForLoanFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
