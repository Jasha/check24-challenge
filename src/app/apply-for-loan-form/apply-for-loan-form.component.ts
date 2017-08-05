import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'c24-apply-for-loan-form',
  templateUrl: './apply-for-loan-form.component.html',
  styleUrls: ['./apply-for-loan-form.component.scss']
})
export class ApplyForLoanFormComponent {
  @Input() backAction: () => void;

  applyForLoanForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location) {
    this.createForm();
  }

  createForm() {
    this.applyForLoanForm = this.formBuilder.group({
      title: [ '', Validators.required ],
      firstName: [ '', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      lastName: [ '', [ Validators.required, Validators.minLength(2), Validators.maxLength(20) ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      birthday: [ '', [ Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\\.](0?[1-9]|1[012])[\\.]\d{4}$/) ] ],
      zipCode: [ '', [ Validators.required, Validators.min(10000), Validators.max(99999) ] ],
      streetName: [ '', [ Validators.required, Validators.minLength(3), Validators.maxLength(30) ] ],
      streetNumber: [ '', Validators.required ]
    });
  }

  onSubmit() {
    if (this.applyForLoanForm.valid) {
      // TODO: write the data (this.applyForLoanForm.value) to the disk

      alert('You applied for loan successfully.');
      this.applyForLoanForm.reset();
      this.onBackClick();
    }
  }

  onBackClick() {
    this.location.back();
  }
}
