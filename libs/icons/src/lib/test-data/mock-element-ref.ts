import { ElementRef } from '@angular/core';

export class MockElementRef extends ElementRef {
  nativeElement: HTMLElement = ({
    innerHTML: '',
    querySelector: jest.fn(),
  } as unknown) as HTMLElement;

  constructor() {
    super(null);
  }
}
