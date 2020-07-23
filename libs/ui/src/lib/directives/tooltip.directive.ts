import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[uiTooltip]' })
export class TooltipDirective {
  constructor(private elementRef: ElementRef) {}
}
