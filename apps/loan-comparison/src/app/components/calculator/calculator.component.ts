import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoanPurpuse } from '@models';

@Component({
  selector: 'loan-comparison-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit {
  @Input() defaultAmount = 1500;
  @Input() defaultPurpose = LoanPurpuse.FREE;
  @Input() defaultDuration = 12;

  calculatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.calculatorForm = this.formBuilder.group({
      amount: new FormControl(this.defaultAmount, [
        Validators.required,
        Validators.min(500),
      ]),
      duration: new FormControl(this.defaultDuration, [Validators.required]),
      purpose: new FormControl(this.defaultPurpose, [Validators.required]),
    });
  }

  calculate() {
    console.log('Calculator Values: ', this.calculatorForm.value);
  }
}
