import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [CalculatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component instanceof CalculatorComponent).toBeTruthy();
  });

  describe('initForm', () => {
    it('should be called onInit', () => {
      spyOn(component, 'initForm').and.callThrough();

      component.ngOnInit();
      expect(component.initForm).toHaveBeenCalledTimes(1);
    });

    it('should initialize the calculator form', () => {
      const form = component.calculatorForm;

      expect(form).toBeTruthy();
      expect(form.contains('amount')).toBeTruthy();
      expect(form.contains('duration')).toBeTruthy();
      expect(form.contains('purpose')).toBeTruthy();
    });
  });
});
