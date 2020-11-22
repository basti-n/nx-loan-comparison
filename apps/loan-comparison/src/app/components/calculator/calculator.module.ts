import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';
import { CalculatorInputComponent } from './input/calculator-input';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CalculatorComponent],
  declarations: [CalculatorComponent, CalculatorInputComponent],
  providers: [],
})
export class CalculatorModule {}
