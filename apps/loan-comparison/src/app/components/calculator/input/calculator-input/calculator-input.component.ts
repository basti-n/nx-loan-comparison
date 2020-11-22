import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
import { InputType } from '@models';

@Component({
  selector: 'loan-comparison-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalculatorInputComponent),
      multi: true,
    },
  ],
})
export class CalculatorInputComponent implements ControlValueAccessor {
  @Input() type: InputType = 'text';
  @Input() label = '';

  public inputFormControl = new FormControl();

  private onChange: (value: string) => void;
  private onTouched: () => void;

  constructor() {}

  handleInput() {
    this.onChange(this.inputFormControl.value);
  }

  handleBlur() {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.inputFormControl.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    isDisabled
      ? this.inputFormControl.disable()
      : this.inputFormControl.enable();
  }
}
